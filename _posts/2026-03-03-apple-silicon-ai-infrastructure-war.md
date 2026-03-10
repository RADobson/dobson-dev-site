---
layout: post
featured: true
title: "Running LLMs on Apple Silicon — What's Real, What's Hype"
date: 2026-03-03
description: "A practical breakdown of local LLM infrastructure: where Apple Silicon works, where NVIDIA still wins, and how we're deciding. Hard numbers, real benchmarks, no fanboy energy."
author: Richard Dobson
categories: [AI, Infrastructure, Apple Silicon]
tags: [apple-silicon, nvidia, llm, inference, mlx, unified-memory, edge-ai, deepseek, m5-max]
---

I spent a week on one question:

**If we're building agentic AI systems, when does Apple Silicon make more sense than renting NVIDIA?**

This isn't a fan post. It's a field note from the operator seat. I don't care about benchmark chest-thumping. I care about what ships, what it costs, and what breaks at 2am.

---

## The funniest chart in tech

A16Z published a chart (FactSet, Feb 2026) of standardised quarterly capex for the big five:

- **Amazon:** +42% YOY
- **Microsoft:** +89% YOY
- **Alphabet:** +50% YOY
- **Meta:** +48% YOY
- **Apple:** −19% YOY

Four companies ploughing **$100 billion per quarter** into data centres. Apple spending *less* than last year.

Meanwhile: Mac Minis sold out. Mac Studios on six-week backlog. Someone ran Qwen 3.5 on an iPhone. The M5 Max just shipped with 128GB unified memory running Llama 70B from anywhere.

![Apple on Capex: 'Nah, we're good' — Standardised quarterly capital expenditure showing Amazon, Microsoft, Alphabet, and Meta surging while Apple stays flat. Source: FactSet/A16Z](/assets/images/apple-silicon-capex-chart.png)

As [@JoshKale put it](https://x.com/joshkale/status/2028889347794047071): *"The company spending the least on AI infrastructure accidentally became the AI infrastructure."*

That's the tension this post unpacks.

---

## Why we care

Our constraints are boring:

- Keep client data private
- Run models without insane infra bills
- Iterate fast
- Keep things stable enough to trust

That lens changes the conversation. Most internet debate is about peak numbers. Most real teams solve for reliability, economics, and speed of execution.

---

## The architecture problem nobody explains well

Most people treat AI infrastructure as a pure compute race. Whoever has the most FLOPS wins. But in inference-heavy workflows — what most businesses actually do — **memory is often the real bottleneck**.

Traditional GPU setups: CPU and GPU have separate memory pools. Every AI query means data physically moves across a bus. Latency, wasted energy, hard performance ceiling. Architectural, not computational.

Apple's answer: eliminate the separation entirely. **Unified Memory Architecture (UMA)** puts CPU, GPU, and Neural Engine on the same memory pool. No data movement. No bus bottleneck.

Practical result: a Mac Studio runs a 70B-parameter model locally, silently, on your desk. Not as fast as an H100 cluster. But you didn't rent anything, configure anything, or send your data anywhere.

---

## M5 Max: the spec sheet that broke Twitter

Apple just dropped the [M5 Max MacBook Pro](https://x.com/JoshKale/status/2028842880572199173):

- **18-core CPU** with 6 "super cores" — world's fastest CPU core
- **40-core GPU** — rivals an RTX 4070, in a laptop
- **128GB unified memory** — more than most servers
- **614 GB/s memory bandwidth** — 4x the DGX Spark
- **24-hour battery life**
- **$3,499**

Llama 70B — a model that required a $40,000 GPU cluster 18 months ago — now runs on a laptop at a coffee shop. At 20–30 tok/s, fast enough to actually use.

The local AI revolution just shipped as a consumer product. With a keyboard and a battery.

---

## The numbers that matter

Forget FLOPS. For inference, these metrics determine what you can run and what it costs:

**Memory cost per GB:**
- Apple M3 Ultra: **$18/GB**
- NVIDIA DGX Spark: **$36/GB**
- NVIDIA B200 (DGX): **$360/GB**

Apple is **20x cheaper per GB** than NVIDIA's best datacentre GPU. Half the price even against the budget-tier Spark.

**Energy economics:**
- M4 Ultra: ~400 joules per inference task vs cloud GPU: ~10x more
- H100 exceeds **700W** sustained; Mac Studio M4 Ultra: a fraction
- A 4-node Mac Studio cluster draws **under 250 watts**. Whisper-quiet. Under your desk.

Stack Mac Studios and you're building the cheapest way to run frontier AI models today. NVIDIA has, as one thread put it, "completely missed this segment."

Doesn't mean Apple replaces NVIDIA. But if your problem is "fit bigger models locally, keep data onshore, and not torch budget," the economics are brutal.

---

## Real cluster data (what convinced me)

Jeff Geerling's 4x Mac Studio cluster testing (Apple-loaned, December 2025) shifted this from "interesting" to "usable."

**Setup:** 4x M3 Ultra Mac Studios, 1.5TB total unified memory, Thunderbolt 5. Cost: ~$40,000.

**Results:**
- **DeepSeek V3.1 (671B):** 21.1 tok/s single → 27.8 two nodes → **32.5 tok/s four nodes**
- **Kimi K2 Thinking (1T params):** 28 tok/s across the cluster
- **Power:** Under 250W total. Less than 10W idle per node.
- **Geekbench:** M3 Ultra beats DGX Spark and AMD AI Max+ 395 in single AND multi-core
- **FP64:** First small desktop to break 1 Tflop — nearly double the NVIDIA GB10

Geerling's summary: *"A single M3 Ultra Mac Studio has more horsepower than my entire Framework Desktop cluster, using half the power."*

Caveats: RDMA over TB5 is still early. Latency dropped from 300μs (TCP) to 5–9μs (RDMA), but setup requires Recovery Mode and cabling doesn't scale past 4–7 nodes. No TB5 switches exist.

But "4 quiet boxes under your desk running trillion-parameter models at 28 tok/s for 250 watts" is a different universe from two years ago.

---

## DGX Spark: honest assessment

Not anti-NVIDIA. The Spark has a real use case — it's a **capacity play** for models (120B+ in NVFP4) that would crash a 24GB consumer GPU.

But the honest picture:

**Carmack's review (Oct 2025):** Power maxing at 100W (not rated 240W). Roughly half quoted performance. Gets "quite hot." Spontaneous rebooting. Verdict: *"My M3 Pro was generating tokens at comparable speeds"* for models that fit in 36GB.

**Jan 2026 update:** 2.5x improvement on prefill and batch. But token generation — what you actually *feel* — is bandwidth-limited. Physics problem.

**Feb 2026:** NVIDIA raised the price from $3,999 to **$4,699** (18% hike, LPDDR5X supply). The same memory Apple uses. But Apple is the world's largest LPDDR5X buyer and can ship 512GB Mac Studios while NVIDIA can't hold pricing on 128GB. Structural supply chain advantage.

The Spark's 273 GB/s bandwidth looks thin against the M5 Max's 614 GB/s. AMD's Strix Halo benchmarks similarly at half the price.

**Where Spark shines:** Brev hybrid routing, dual-Spark 256GB pools for Llama 405B, and 30+ NIM playbooks. If you need CUDA compatibility, it's the cheapest entry.

---

## MLX is quietly winning

Apple-side tooling is moving faster than most realise.

A forthcoming paper (vllm-mlx, EuroMLSys '26) benchmarked native Apple Silicon inference against llama.cpp:

- **21–87% higher throughput** than llama.cpp on Apple Silicon
- M4 Max: up to **525 tok/s** on text models (Qwen3-0.6B)
- **Continuous batching:** 4.3x aggregate throughput at 16 concurrent requests
- **Prefix caching:** 28x speedup on repeated image queries

Why? MLX exploits UMA properly — lazy evaluation, native quantisation kernels, true zero-copy. llama.cpp was designed for discrete GPUs and adapted; MLX was built for UMA.

**Key insight:** Apple Silicon's advantage **grows** with concurrency. Continuous batching on UMA is fundamentally more efficient because KV cache doesn't transfer between devices. Single-user tok/s comparisons are misleading — in multi-user serving, the UMA advantage compounds.

Demand signals match: Mac Minis backordered, Mac Studios six-week wait. When Alibaba dropped Qwen 3.5, MLX support landed same-day — running on an iPhone within hours.

I track a simple metric: **TTLD (Time To Local Deployment)** — model release to running privately. For agentic workflows where privacy and iteration speed beat peak throughput, Apple + MLX consistently wins TTLD even when it loses raw numbers.

---

## Why DeepSeek V4 changes the hardware calculus

This is the part nobody's connecting yet.

Standard transformers waste expensive GPU compute on two fundamentally different tasks:

1. **Static Recall** — "What's the syntax for a Python list comprehension?" Memory lookups. No reasoning needed.
2. **Dynamic Reasoning** — Logic, composition, novel problem-solving. Needs full compute.

Every model today uses the same expensive hardware for both. Like hiring a surgeon to do your filing.

DeepSeek V4's **Engram architecture** separates them. Static knowledge offloads to an O(1) hash-based lookup table in system DRAM — 100B parameters in regular memory, not GPU memory. Throughput penalty: less than 3%.

The hardware implication: **high-bandwidth system memory is now as valuable as GPU FLOPS.**

On traditional x86+GPU, Engram lookups go through the PCIe bus — bottleneck. On Apple Silicon's UMA, they're in the **same memory pool** as GPU compute. Zero-cost access.

V4 activates only 32B parameters from its 1 trillion total (fewer than V3 despite being 50% larger). Less GPU compute needed, more memory needed. Apple's $/GB advantage dominates exactly the cost structure V4 optimises for.

**The convergence thesis:** As architectures evolve to separate memory from reasoning — Engram being the first — Apple Silicon's unified memory becomes *more* advantageous. The trajectory:

- **2024:** "Apple can't do AI" (the training narrative)
- **2025:** "Apple Silicon is interesting for inference" (the memory narrative)
- **2026:** "Apple Silicon + Engram-style models = optimal local inference" (convergence)

As more models adopt conditional memory and knowledge offloading, the gap widens.

---

## ANE: watch this space

The Neural Engine deserves a mention — not because it's production-ready for LLMs, but because it signals untapped headroom.

M4's Neural Engine: 38 TOPS. M5 puts neural accelerators **inside each GPU core** — generational architecture shift. A reverse-engineering project (maderix/ANE) has demonstrated training and backprop on the ANE with compelling microbenchmarks.

But today: private APIs, fragility risk, CPU fallbacks, potential breakage every macOS update. Research territory, not production dependency. File under "strategic headroom."

---

## The honest counterarguments

**Throughput at scale:** Need 100+ tok/s on the largest open models? Apple loses. Two Mac Studios running Kimi K2.5 at 4-bit quant: 10–12 tok/s. Two AMD TBv2 cards might be cheaper for raw throughput. Apple wins $/GB but can lose throughput-per-dollar at the high end.

**RDMA is green:** TB5 RDMA is a strategic signal, not production-grade clustering. CPU spikes (900%+) from TB Bridge loops. Recovery Mode access required. No TB5 switches. Full mesh means N-1 cables per node. Beyond 4–7 nodes: unsolved.

**Cluster management pain:** Exo clustering works and auto-discovers, but it's not Kubernetes. Don't expect enterprise ops maturity.

**Training is still NVIDIA:** Heavy training and fine-tuning remain NVIDIA territory. CUDA ecosystem, mature distributed training, raw scale. Training-heavy workload? This conversation doesn't apply.

**This isn't a religion.** Any real strategy here is mixed. The question isn't Apple *or* NVIDIA — it's knowing when each wins.

---

## How we're deciding

**Apple-first when:**
- Inference-heavy workload
- Privacy or data locality matters
- Memory-per-dollar matters
- Fast local iteration is valuable
- Data stays onshore without cloud bills

**NVIDIA/cloud-first when:**
- High throughput target (100+ tok/s on large models)
- Training or fine-tuning heavy
- Enterprise ops maturity required
- CUDA ecosystem compatibility needed

In practice: increasingly hybrid. Apple for local core paths and private data. Cloud for peak compute when needed.

---

## Personal Computing v2

Karpathy framed it on Latent Space: *"As we leave the cloud for Personal/Private AI, some signs of Personal Computing v2 are being born in Exolabs and Apple MLX work."*

Two eras:

1. **PC v1 (1980s):** Computation moved from mainframes to desktops.
2. **PC v2 (2026+):** AI inference moves from data centres to desktops.

Apple won the first transition. They're building infrastructure for the second — not with data centres, but with architecture.

The data sovereignty angle isn't just privacy idealism. It's economic inevitability. As models grow and API costs compound, the break-even for local inference keeps moving earlier. A Mac Mini M4 Pro pays for itself vs cloud H100 rental ($2.39/hr) in roughly 1,000 hours — about 6 weeks of continuous inference.

---

## Where I've landed

A year ago, serious local AI on Apple felt niche. Now it feels like a legitimate operating mode.

Not because Apple "won AI." Because architecture, economics, and tooling velocity combined into something too practical to ignore.

Look at that capex chart again. Big Tech is spending hundreds of billions on top-down AI infrastructure — massive data centres, custom chips, power plants. Apple spent *less* and ended up with sold-out hardware that developers are clustering to run trillion-parameter models under their desks.

Nobody planned that. It's what happens when you build the right architecture and demand finds you.

If you're building agentic systems and haven't pressure-tested local inference, it's worth doing. The numbers might surprise you.

---

*Next up: concrete reference builds (Mac Mini / Mac Studio tiers), expected model envelopes, and where each setup starts to fall over.*
