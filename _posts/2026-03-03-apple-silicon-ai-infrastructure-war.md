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

I spent the last week on one question:

**If we're building agentic AI systems, when does Apple Silicon make more sense than renting NVIDIA?**

This isn't a fan post. It's a field note from the operator seat.

I don't care about benchmark chest-thumping. I care about what ships, what it costs, and what breaks at 2am.

---

## The funniest chart in tech right now

There's a chart making the rounds from A16Z (sourced from FactSet, Feb 2026) that tells the whole story in one image.

Standardised quarterly capital expenditure for the big five:

- **Amazon:** +42% YOY
- **Microsoft:** +89% YOY
- **Alphabet:** +50% YOY
- **Meta:** +48% YOY
- **Apple:** −19% YOY

Amazon, Microsoft, Meta, and Google are in a spending arms race — collectively ploughing over **$100 billion per quarter** into data centres. Apple's spending is *down*.

Meanwhile:

- Mac Minis are sold out. People are buying them to run local AI.
- Mac Studios have a six-week backlog.
- Someone ran Qwen 3.5 on an iPhone yesterday.
- The M5 Max just shipped with 128GB of unified memory and runs Llama 70B from anywhere.

![Apple on Capex: 'Nah, we're good' — Standardised quarterly capital expenditure showing Amazon, Microsoft, Alphabet, and Meta surging while Apple stays flat. Source: FactSet/A16Z](/assets/images/apple-silicon-capex-chart.png)

As [@JoshKale put it](https://x.com/joshkale/status/2028889347794047071): *"The company spending the least on AI infrastructure accidentally became the AI infrastructure."*

That's the tension this post unpacks. Not Apple vs NVIDIA as a fanboy debate — but what happens when the economics of AI inference start rewarding architecture over brute-force capex.

---

## Why this research matters to us

Our real constraints are boring:

- Keep client data private.
- Run models without insane infra bills.
- Iterate fast.
- Keep things stable enough to trust.

That lens changes the conversation quickly. Most internet debate is about peak numbers. Most real teams are solving for reliability, economics, and speed of execution.

---

## The architecture problem nobody explains well

Most people still treat AI infrastructure like a pure compute race. Whoever has the most FLOPS wins. But in inference-heavy workflows — which is what most businesses actually do with AI — memory is often the real bottleneck.

Here's the problem with traditional GPU setups: CPU and GPU have **separate memory pools**. Every AI query means data physically moves across a bus between them. That creates latency, wastes energy, and sets a hard performance ceiling that no amount of raw GPU power eliminates. It's architectural, not computational.

Apple's answer was to eliminate the separation entirely. Their **Unified Memory Architecture (UMA)** puts CPU, GPU, and Neural Engine on the same memory pool. No data movement. No bus bottleneck. Everything accesses the same fast unified memory.

The practical result: a Mac Studio can run a 70B-parameter model locally, silently, on your desk. Is it as fast as an H100 cluster? No. But you didn't need to rent anything, configure anything, or send your data anywhere.

---

## M5 Max: the spec sheet that broke Twitter

Apple just dropped the [M5 Max MacBook Pro](https://x.com/JoshKale/status/2028842880572199173) and the numbers are hard to process:

- **18-core CPU** with 6 "super cores" — world's fastest CPU core
- **40-core GPU** — rivals an RTX 4070, in a laptop
- **128GB unified memory** — more than most servers
- **614 GB/s memory bandwidth** — that's 4x what a DGX Spark gets
- **24-hour battery life**
- **Price:** $3,499

You can now run Llama 70B — a model that required a $40,000 GPU cluster 18 months ago — on a laptop at a coffee shop. At 20-30 tokens/sec, it's fast enough to actually use.

The "local AI revolution" just shipped as a consumer product. For $3,499. With a keyboard and a battery.

---

## The numbers that actually matter

Forget FLOPS comparisons. For inference workloads, these are the metrics that determine what you can actually run and what it costs:

**Memory cost per GB:**
- Apple M3 Ultra: **$18/GB**
- NVIDIA DGX Spark: **$36/GB**
- NVIDIA B200 (DGX): **$360/GB**

Apple Silicon is **20x cheaper per GB** than NVIDIA's best data centre GPU. Even against the budget-tier DGX Spark, it's half the price.

**Memory bandwidth cost:**
- M3 Ultra: **$6.70 per GB/s**
- DGX Spark: **$17 per GB/s**
- B200: **$8 per GB/s**

**Energy economics:**
- M4 Ultra: ~400 joules per inference task vs cloud GPU: ~10x more
- H100: exceeds **700W** sustained; Mac Studio M4 Ultra: a fraction of that
- A 4-node Mac Studio cluster draws **under 250 watts**. Whisper-quiet. Under your desk.

When you stack Mac Studios, you're building the cheapest way to run frontier AI models today. NVIDIA has, as one X thread put it, "completely missed this segment."

That doesn't mean Apple replaces NVIDIA. But if your problem is "fit bigger models locally, keep data onshore, and not torch budget," the economics are brutal.

---

## What convinced me: real cluster data

Jeff Geerling's 4x Mac Studio cluster testing (Apple-loaned hardware, December 2025) is what shifted this from "interesting" to "usable" for me.

**The setup:** 4x M3 Ultra Mac Studios, 1.5TB total unified memory, connected via Thunderbolt 5. Cost: ~$40,000 total.

**The results:**
- **DeepSeek V3.1 (671B params):** 21.1 tok/s single node → 27.8 tok/s two nodes → **32.5 tok/s on four nodes**
- **Kimi K2 Thinking (1 trillion params):** 28 tok/s across the cluster
- **Power draw:** Under 250W for the entire cluster. Less than 10W per node at idle.
- **Geekbench:** M3 Ultra beats both DGX Spark and AMD AI Max+ 395 in single AND multi-core
- **FP64:** First small desktop to break 1 Tflop — nearly double the NVIDIA GB10

Geerling's summary: *"A single M3 Ultra Mac Studio has more horsepower than my entire Framework Desktop cluster, using half the power."*

A single Mac Studio outperformed a 2-node Dell Pro Max GB10 cluster with double the memory.

Is it perfect? No — RDMA over Thunderbolt 5 is still early. Latency dropped from 300μs (TCP) to 5-9μs (RDMA), but the setup requires Recovery Mode access and the cabling doesn't scale beyond 4-7 nodes yet. No TB5 switches exist.

But "4 quiet boxes under your desk running trillion-parameter models at 28 tok/s for 250 watts" is a different universe from what was possible two years ago.

---

## DGX Spark: useful if you frame it right

I'm not anti-NVIDIA. The DGX Spark has a real use case — it's a **capacity play**. It holds large models (120B+ in NVFP4) in a compact form factor that would crash a 24GB consumer GPU.

But the honest picture matters.

**John Carmack's review (October 2025):** Power maxing at 100W (not the rated 240W). Roughly half quoted performance. Gets "quite hot." Spontaneous rebooting. His verdict: *"My M3 Pro was generating tokens at comparable speeds"* for models that fit in 36GB.

**January 2026 software update:** 2.5x improvement on prefill and batch workloads. But token generation — the thing you actually feel as a user — is bandwidth-limited. Physics problem, not software problem.

**February 2026:** NVIDIA raised the price from $3,999 to **$4,699** — an 18% hike due to LPDDR5X memory supply constraints. The same memory Apple uses. But Apple is the world's largest buyer of LPDDR5X and can offer 512GB Mac Studios while NVIDIA can't even hold pricing on 128GB. That's a structural supply chain advantage, not a one-time quirk.

The DGX Spark's 273 GB/s memory bandwidth looks thin next to the M5 Max's 614 GB/s. And AMD's Strix Halo benchmarks similarly at half the Spark's price.

**Where Spark genuinely shines:** Brev hybrid routing (local for sensitive data, cloud for general queries), dual-Spark 256GB pools for Llama 405B, and the 30+ NIM playbooks for quick deployment. If you need NVIDIA's ecosystem and CUDA compatibility, Spark is the cheapest entry point.

---

## MLX is quietly winning

Apple-side tooling is moving faster than most people realise.

A forthcoming academic paper (vllm-mlx, EuroMLSys '26) benchmarked native Apple Silicon inference against llama.cpp — the current default for local model serving:

- **21% to 87% higher throughput** than llama.cpp on Apple Silicon
- M4 Max: up to **525 tok/s** on text models (Qwen3-0.6B)
- **Continuous batching:** 4.3x aggregate throughput at 16 concurrent requests
- **Prefix caching:** 28x speedup on repeated image queries; 24.7x on video analysis

Why the gap? MLX exploits UMA properly — lazy evaluation, native quantisation kernels, true zero-copy from unified memory. llama.cpp was designed for discrete GPUs and adapted for Apple Silicon. MLX was built for it.

**The key insight:** Apple Silicon's advantage **grows** with concurrent requests. Continuous batching on UMA is fundamentally more efficient because the KV cache doesn't need to be transferred between devices. Raw single-user tok/s comparisons are misleading — in multi-user serving scenarios, the UMA advantage compounds.

The demand signals back this up. Mac Minis are backordered. Mac Studios have a six-week wait. When Alibaba dropped Qwen 3.5 (small models: 0.8B through 9B), MLX support landed same-day — someone had it running on an iPhone within hours, and it was in an app store within a day.

I've started tracking a simple metric: **TTLD (Time To Local Deployment)** — model release to running privately in our environment. For agentic workflows where privacy and iteration speed matter more than peak throughput, Apple + MLX consistently wins on TTLD even when it loses on raw numbers.

---

## Why DeepSeek V4 changes the hardware calculus

This is the part nobody's connecting yet, and it's the reason I think Apple Silicon's advantage is going to *widen*, not narrow.

Standard transformers have what I'll call the **Two Jobs Problem.** They waste expensive GPU compute on two fundamentally different tasks:

1. **Static Recall** — "What's the syntax for a Python list comprehension?" or "What's the capital of France?" These are memory lookups. They don't need reasoning.
2. **Dynamic Reasoning** — Logic, composition, novel problem-solving. This needs full GPU compute.

Every model today uses the same expensive hardware for both. It's like hiring a surgeon to also do your filing.

DeepSeek V4's **Engram architecture** separates them. Static knowledge gets offloaded to an O(1) hash-based lookup table in system DRAM — a 100B-parameter embedding table that sits in regular memory, not GPU memory. Throughput penalty: less than 3%. The lookups are deterministic, unlike MoE's dynamic routing.

The hardware implication is massive: **high-bandwidth system memory is now as valuable as GPU FLOPS.**

On a traditional x86+GPU setup, those Engram lookup tables go through the PCIe bus — bottleneck. On Apple Silicon's UMA, they're in the **same memory pool** as GPU compute. No bottleneck. No bus. Zero-cost access.

V4 activates only 32B parameters out of its 1 trillion total (fewer active params than V3 despite being 50% larger). That means: less GPU compute needed, more memory needed. Apple's $/GB advantage dominates exactly the cost structure V4 is optimised for.

**The convergence thesis:** As model architectures evolve to separate memory from reasoning — and Engram is just the first — Apple Silicon's unified memory becomes *more* advantageous, not less. The trajectory:

- **2024:** "Apple can't do AI" (the training narrative)
- **2025:** "Apple Silicon is interesting for inference" (the memory narrative)
- **2026:** "Apple Silicon + Engram-style models = the optimal local inference architecture" (convergence)

As more models adopt conditional memory and knowledge offloading, the gap widens in Apple's favour.

---

## ANE: watch this space

The Neural Engine deserves a mention — not because it's production-ready for LLMs, but because it signals untapped headroom.

The M4's Neural Engine delivers 38 TOPS. The M5 puts neural accelerators **inside each GPU core** — a generational architecture shift. And a reverse-engineering project (maderix/ANE) has demonstrated direct training and backpropagation on the ANE, with compelling microbenchmarks.

But right now: private APIs, fragility risk, CPU fallbacks, and potential breakage with any macOS update. Research territory, not production dependency. File it under "strategic headroom" and move on.

---

## The honest counterarguments

I'd lose credibility if I didn't address these.

**Throughput at scale:** If you need 100+ tok/s on the largest open models, Apple loses. The tinygrad crowd has a point — 2x Mac Studios running Kimi K2.5 at 4-bit quant manage only 10-12 tok/s. Two AMD TBv2 cards might be cheaper for raw throughput targets. Apple wins $/GB but can lose throughput-per-dollar at the high end.

**RDMA is still green:** Apple's Thunderbolt 5 RDMA is a strategic signal, not a production-grade clustering solution. Early testers report CPU spikes (900%+) from Thunderbolt Bridge loops. You need physical Recovery Mode access. No TB5 switches exist. Full mesh topology means N-1 cables per node. Scaling beyond 4-7 nodes is an unsolved cabling problem.

**Cluster management pain:** Exo clustering works and auto-discovers nodes, but it's not Kubernetes. If your team expects enterprise ops maturity, you'll be disappointed.

**Training is still NVIDIA:** Heavy training and fine-tuning remain NVIDIA territory. CUDA ecosystem, mature distributed training, and raw scale. If your workload is training-heavy, this conversation doesn't apply.

**This isn't a religion.** Any real infrastructure strategy here is mixed. The question isn't Apple *or* NVIDIA — it's knowing when each one wins.

---

## How we're deciding

**Apple-first when:**
- Inference-heavy workload
- Privacy or data locality matters
- Memory-per-dollar matters
- Fast local iteration is valuable
- You want to keep data onshore without cloud bills

**NVIDIA/cloud-first when:**
- Throughput target is high (100+ tok/s on large models)
- Training or fine-tuning burden is heavy
- Enterprise ops maturity is the priority
- CUDA ecosystem compatibility is required

In practice, we're increasingly hybrid. Apple for local core paths and private data. Cloud for peak compute when we need it.

---

## Personal Computing v2

Andrej Karpathy framed it well on the Latent Space podcast: *"As we leave the cloud for Personal/Private AI, some signs of Personal Computing v2 are being born in Exolabs and Apple MLX work."*

Personal computing had two eras:

1. **PC v1 (1980s):** Computation moved from mainframes to desktops.
2. **PC v2 (2026+):** AI inference moves from data centres to desktops.

Apple is the only company positioned for both transitions. They won PC v1. They're building the infrastructure for PC v2 — not with data centres, but with architecture.

The data sovereignty angle isn't just privacy idealism. It's economic inevitability. As models get larger and API costs compound, the break-even point for local inference keeps moving earlier. A Mac Mini M4 Pro pays for itself versus cloud H100 rental ($2.39/hr) in roughly 1,000 hours of use. That's about 6 weeks of continuous inference.

---

## Where I've landed

A year ago, serious local AI on Apple felt niche. Now it feels like a legitimate operating mode for builder teams.

Not because Apple "won AI." Because the combination of architecture, economics, and tooling velocity is becoming too practical to ignore.

Look at that capex chart one more time. The rest of Big Tech is spending hundreds of billions trying to build AI infrastructure from the top down — massive data centres, custom chips, power plants. Apple spent *less* than last year and ended up with sold-out hardware that developers are clustering together to run trillion-parameter models under their desks.

That's not a strategy anyone planned. It's what happens when you build the right architecture and the demand finds you.

If you're building agentic systems and haven't pressure-tested local inference yet, it's worth doing. The numbers might surprise you.

---

*Next up: concrete reference builds (Mac Mini / Mac Studio tiers), expected model envelopes, and where each setup starts to fall over.*
