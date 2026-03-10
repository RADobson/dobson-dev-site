---
layout: post
featured: true
title: "Agentic AI in the SOC — What the Major Platforms Are Actually Building"
description: "A technical comparison of agentic AI platforms for security operations in 2026. Covers CrowdStrike Charlotte AI, Palo Alto XSIAM, Torq HyperSOC, Tuskira, Dropzone AI, Radiant Security, Prophet Security, and Exabeam Nova."
date: 2026-02-25
author: Richard Dobson
categories: [cybersecurity, AI]
tags: [agentic-AI, SOC, security-operations, MDR, SIEM, CrowdStrike, Palo-Alto, Torq, Tuskira, Dropzone-AI, Radiant-Security, Prophet-Security, Exabeam]
---

# Agentic AI in the SOC — What's Actually Shipping vs. What's a Slide Deck

There's a lot of marketing around "agentic AI" in security right now and not much clarity about what's real. I've spent months digging into the technical architectures behind the platforms making serious claims. Here's what I found.

---

## Definitions Worth Getting Right

These terms get used interchangeably. They shouldn't be.

- **Copilot** — AI that helps a human work faster (answers questions, drafts reports, suggests next steps)
- **Automation** — Deterministic if/then logic at machine speed (traditional SOAR)
- **Agentic AI** — Systems that reason about goals, plan action sequences, use tools autonomously, and adapt when things break

The third category is genuinely new. The first two have existed for years. The distinction matters.

---

## The Incumbents

### CrowdStrike — Charlotte AI & AgentWorks

Charlotte AI is more technically interesting than it gets credit for.

Core claim: Charlotte was trained on elite analyst *judgment*, not just threat data. When an alert arrives, it runs a model that learned what a skilled analyst with deep context would do — handling novel patterns no playbook covers.

Three layers:

**1. Detection Triage** — Ingests Falcon telemetry, autonomously triages, filters false positives, surfaces what matters. Continuously retrains as real analysts validate or override.

**2. Charlotte Agentic SOAR** — Structured SOAR logic plus agentic reasoning. Agents think and decide when situations don't match playbooks. Analysts can inject context mid-investigation.

**3. AgentWorks** — No-code platform for building custom security agents in natural language. Define goal, data sources, guardrails — no engineering required.

**Strength:** Falcon telemetry. Nobody else has that volume of endpoint data to train on.

**Limitation:** Deep Falcon ecosystem lock-in. Less valuable if you're not CrowdStrike-heavy.

---

### Palo Alto Networks — Cortex XSIAM + AgentiX

XSIAM is the most ambitious platform consolidation bet in enterprise SOC. AgentiX is the agentic layer on top.

- **XDL (Extended Data Layer)** — Unified data fabric normalising endpoint, network, identity, cloud, and third-party telemetry into a single semantic layer.
- **2,600+ ML detection models** running continuously, with 100% MITRE ATT&CK coverage in their latest evaluation.
- **AgentiX** — AI agent workforce that plans, reasons, and acts autonomously. Specialised agents with defined roles and guardrails.

Published numbers: 98% MTTR reduction, 99% alert noise reduction, 300% ROI. Oneida Nation claims 43-second incident resolution. Vendor metrics deserve scepticism, but independent MITRE ATT&CK results are harder to wave away.

**Strength:** Platform consolidation. Once on Cortex, switching costs are enormous.

**Limitation:** Enterprise pricing. Not targeting SMB.

---

## The Challengers

### Torq — HyperSOC & Multi-Agent Architecture

Torq makes the most interesting architectural argument among challengers: autonomous SOC should be a **Multi-Agent System (MAS)**, not a single AI model.

HyperSOC-2o orchestrates specialised agents across triage, investigation, response, and post-incident summary — each optimised for its function. Deterministic automation handles known workflows reliably; the agentic layer handles ambiguity.

Carvana's result: Torq handles 100% of Tier-1 alerts and automated 41 runbooks within one month. The one-month timeframe matters — traditional SOAR deployments took quarters.

**Strength:** MSSP/MDR focus. Built for providers running SOC at scale.

**Limitation:** Middleware play. Depends on your existing tools working well underneath.

---

### Tuskira — The AI Defence Mesh

Tuskira is the most technically differentiated startup here and probably the least understood.

They're building an **AI Defence Mesh** — architecturally distinct from everything else. Five steps:

**1. Ingest and Normalise:** 150+ integrations across SIEM, EDR, CSPM, IAM, WAF, GRC, and cloud configs.

**2. Build the Digital Twin:** Continuously updated model of your environment — cloud topology, network reachability, identity relationships, control coverage. Not a static diagram; a live model of how attackers could move today.

**3. AI Simulation & Validation:** Attack paths continuously tested against your defences. Simulates real attacks against the digital twin to identify what's truly exploitable — filtering false positives before humans ever see them.

**4. AI Analysts Act:** Role-based AI analysts (Vulnerability, Zero-Day, Threat Advisory, Remediation) triage with full digital twin context, correlate across tools, tune defences automatically.

**5. Closed-Loop Feedback:** Every action, simulation result, and posture drift feeds back into the mesh.

Published outcomes: 98% alert noise reduction, 60% fewer attack paths, 5-minute triage.

This is preemptive defence, not reactive triage. The core innovation: digital twin plus continuous simulation — finding what's exploitable before attackers do.

**Strength:** Only platform doing live attack simulation at this scale as a continuous background process.

**Limitation:** Early stage. Enterprise-complexity deployment.

---

## The Triage Specialists

### Radiant Security — Transparent Agentic Triage

Radiant solves a problem most platforms handle poorly: **explainability**.

Every escalation or dismissal includes full traceability — which sources were queried, what patterns detected, why that conclusion. Analysts validate reasoning, not just accept it.

Smart economic bet too: built-in security data lake at up to 85% cost reduction vs traditional SIEM, flat-rate pricing.

**Strength:** Transparent reasoning for regulated industries where "the AI said so" doesn't fly.

---

### Prophet Security — Speed at Scale

Prophet's numbers are the sharpest in category: alerts investigated in under 3 minutes versus the 30-minute human baseline — 90%+ MTTI reduction.

Strong data privacy argument: single-tenant architecture, no customer data used to train models. In an industry deeply sceptical of AI handling sensitive data, that's a meaningful trust signal.

Unusually specific CISO testimonials — Instacart, Clari, Spotnana, Zip — describing concrete outcomes, not generic endorsements.

---

### Dropzone AI — Autonomous Tier-1

The most narrowly focused pure-play and arguably the most practically deployable. One job: autonomous Tier-1 alert investigation.

Replicates the investigative sequences a senior analyst would follow — pulling data, forming hypotheses, testing them, writing findings. Deploys in minutes via API keys, not months of professional services. Learns your environment continuously.

Before/after: MTTR from hours to minutes, manual analysis from 25 to 2 minutes per alert, investigation coverage from 30% to 100%.

**Strength:** Easiest deployment in the category. Day-1 value. Ideal when you can't afford a six-month platform rollout.

---

### Exabeam Nova — UEBA-Native Agent

Nova leverages something unique: a decade of UEBA data and models.

Where other platforms start from scratch with agent reasoning, Nova has deep behavioural baselines. Context isn't just "this IP hit a suspicious URL" — it's "this user's behaviour is 6.2 standard deviations from their 90-day baseline, they've never accessed this system, and three peer-group users showed the same pattern last week."

Their new AI Agent Behaviour Analytics extends this to monitoring deployed AI agents themselves — detecting anomalous agent behaviour. First to market on that.

---

## What It All Adds Up To

**The architectural divergence is real.** Tuskira solves a fundamentally different problem than Dropzone. Charlotte AI does something different from Radiant. These platforms have genuinely different theories of what "autonomous SOC" means.

**Deployment complexity still matters.** The most sophisticated platforms (Tuskira, XSIAM) are the hardest to deploy. Need value this quarter? Dropzone and Prophet offer a faster path.

**Data moats will decide long-term winners.** CrowdStrike has Falcon telemetry. Palo Alto has firewall + XDR + cloud data. Exabeam has 10 years of UEBA baselines. Pure-plays bet that reasoning quality beats data volume. The incumbents will catch up on reasoning while keeping their data advantage.

**"Human-in-the-loop" means wildly different things.** Ranges from "human approves every action" to "human reads the weekly summary." Worth understanding exactly what you're buying.

**Tier-1 triage is a solved problem.** If your SOC still manually triages every alert, that's table-stakes automation now. The interesting question is Tier 2 and 3 — real investigation and response, not just sorting.

---

## The One Question Worth Asking Every Vendor

*"Show me a real investigation, end to end, on a real alert, with no staging. What did the agent do, in what sequence, and how did it know to do that?"*

The ones who answer clearly are building real products. The ones who pivot to a slide deck aren't there yet.

---

*Evaluating how agentic AI fits your SOC roadmap? [Get in touch](/services/ai-consulting) — we help businesses navigate this space.*
