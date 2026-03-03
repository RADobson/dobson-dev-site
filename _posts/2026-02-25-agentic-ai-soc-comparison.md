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

# Agentic AI in the SOC — What the Major Platforms Are Actually Building

There's a lot of marketing around "agentic AI" in security operations right now, and not much clarity about what's actually shipping versus what's still on a roadmap. I've spent the last few months looking at the technical architectures behind the platforms making serious claims in this space. Here's what I found.

---

## Quick Definitions

Worth being precise about these, since the terms get used interchangeably:

- **Copilot** — AI that helps a human do a task faster (answers questions, drafts reports, suggests next steps)
- **Automation** — Deterministic if/then logic executed at machine speed (traditional SOAR)
- **Agentic AI** — Systems that reason about a goal, plan a sequence of actions, use tools autonomously, and adapt when things don't go as expected

The third category is genuinely new. The first two have existed for years. The distinction matters when evaluating products.

---

## The Incumbents

### CrowdStrike — Charlotte AI & AgentWorks

Charlotte AI is CrowdStrike's primary AI investment, and it's more technically interesting than it gets credit for.

The core claim is that Charlotte was trained on the decisions of elite threat analysts — not just threat data, but analyst *judgment*. When an alert arrives, it's running a model that learned what a skilled analyst with deep context would do with that signal, which means it can handle novel alert patterns no playbook was written for.

Three layers to the architecture:

**1. Detection Triage** — Charlotte ingests Falcon telemetry, autonomously triages detections, filters false positives, and surfaces what matters. The model retrains continuously as real analysts validate or override its decisions.

**2. Charlotte Agentic SOAR** — Combines structured SOAR logic with agentic reasoning. Agents can think, decide, and act when situations don't match playbooks. Human analysts can inject context mid-investigation and redirect in real time.

**3. AgentWorks** — A no-code platform for building custom security agents using natural language. Define the goal, data sources, and guardrails — no engineering required.

**Strength:** Falcon telemetry. No one else has that volume of endpoint data to train on.

**Limitation:** Deep Falcon ecosystem dependency. Less valuable if you're not CrowdStrike-heavy.

---

### Palo Alto Networks — Cortex XSIAM + AgentiX

XSIAM is the most ambitious platform consolidation bet in the enterprise SOC space. AgentiX is the agentic AI layer on top.

The architecture:

- **XDL (Extended Data Layer)** — A unified data fabric normalising telemetry from endpoint, network, identity, cloud, and third-party sources into a single semantic layer.
- **2,600+ ML detection models** running continuously, with 100% MITRE ATT&CK coverage in their most recent evaluation.
- **AgentiX** — An AI agent workforce that plans, reasons, and acts autonomously. Specialised agents with defined roles operate within guardrails and report back.

Their published numbers: 98% MTTR reduction, 99% alert noise reduction, 300% ROI. Oneida Nation reported resolving incidents in 43 seconds. Vendor metrics always deserve scrutiny, but the independent MITRE ATT&CK results are harder to dismiss.

**Strength:** Platform consolidation. Once you're on Cortex, switching costs are enormous. Unit 42 MDR wraps managed services around the whole thing.

**Limitation:** Enterprise pricing. Not targeting SMB or mid-market.

---

## The Challengers

### Torq — HyperSOC & the Multi-Agent System

Torq makes the most interesting architectural argument among the challengers: that autonomous SOC should be built as a **Multi-Agent System (MAS)**, not a single AI model.

HyperSOC-2o orchestrates multiple specialised agents across the case management lifecycle — triage, investigation, response, and post-incident summary — each optimised for its function. A deterministic hyperautomation engine handles known workflows reliably, while the agentic layer handles ambiguous edges.

Carvana's result is worth noting: Torq AI handles 100% of Tier-1 alerts and automated 41 runbooks within one month of deployment. The one-month timeframe matters — traditional SOAR deployments took quarters.

The separation of concerns is the key technical idea: structured automation for repeatability, agentic reasoning for novelty.

**Strength:** MSSP/MDR focus — built specifically for providers running SOC at scale.

**Limitation:** Middleware play. Depends on your existing tools working well underneath.

---

### Tuskira — The AI Defense Mesh

Tuskira is the most technically differentiated startup in this space and probably the least understood.

They're building what they call an **AI Defense Mesh** — architecturally different from everyone else here. The model has five steps:

**1. Ingest and Normalize:** 150+ integrations across SIEM, EDR, CSPM, IAM, WAF, GRC, and cloud configs, normalised into a unified semantic layer.

**2. Build the Digital Twin:** A continuously updated model of your environment — cloud topology, network reachability, identity relationships, control coverage. Not a static diagram; a live model of how attackers could move through your environment today.

**3. AI Simulation & Validation:** Attack paths are continuously tested against your defences in the background. The system simulates real attacks against the digital twin to identify what's truly exploitable, filtering false positives before they reach a human.

**4. AI Analysts Act:** Role-based AI analysts (Vulnerability, Zero-Day, Threat Advisory, Remediation) triage with full context from the digital twin, correlate across tools, and tune defences automatically.

**5. Closed-Loop Feedback:** Every action, simulation result, and posture drift feeds back into the mesh.

Published outcomes: 98% alert noise reduction, 60% fewer attack paths, 5-minute triage time.

This is preemptive defence rather than reactive triage. The core innovation is the digital twin combined with continuous simulation — identifying what's exploitable before attackers find it.

**Strength:** The only platform doing live attack simulation at this scale as a continuous background process.

**Limitation:** Early stage. Enterprise-complexity deployment.

---

## The Triage Specialists

### Radiant Security — Transparent Agentic Triage

Radiant positions itself as the intelligent layer between your tools and your team, solving a specific problem most platforms handle poorly: **explainability**.

Every escalation or dismissal includes full traceability — which data sources were queried, what patterns were detected, why the AI reached its conclusion. Analysts can validate or override the reasoning, not just accept it.

They've also made an interesting economic bet: a built-in security data lake with up to 85% cost reduction vs traditional SIEM pricing, with flat-rate pricing. This addresses one of the biggest hidden costs in SOC modernisation.

**Strength:** Transparent reasoning for regulated industries where "the AI said so" isn't sufficient.

---

### Prophet Security — Speed at Scale

Prophet's numbers are the sharpest in the category: alerts investigated in under 3 minutes versus the 30-minute human baseline — a 90%+ reduction in mean time to investigate.

They're also making a strong data privacy argument: single-tenant architecture, no customer data used to train models. In an industry still deeply skeptical of AI handling sensitive data, that's a meaningful trust signal.

The CISO testimonials are unusually specific — Instacart, Clari, Spotnana, Zip — describing concrete outcomes rather than generic endorsements.

---

### Dropzone AI — Autonomous Tier-1 Investigation

Dropzone is the most narrowly focused of the pure-plays and arguably the most practically deployable. They do one thing: autonomous Tier-1 alert investigation.

The architecture replicates investigative sequences a senior analyst would follow — pulling data from existing tools, forming a hypothesis, testing it, and writing up findings. It deploys in minutes via API keys rather than months-long professional services engagements, and learns your environment continuously.

Before/after metrics: MTTR from hours to minutes, manual analysis per alert from 25 minutes to 2 minutes, percentage of alerts investigated from 30% to 100%.

**Strength:** Easiest deployment path in the category. Day-1 value. Ideal for teams that can't afford a six-month platform implementation.

---

### Exabeam Nova — UEBA-Native Agent

Exabeam Nova sits inside the New-Scale SIEM/Fusion platform and leverages something unique: a decade of UEBA (User and Entity Behaviour Analytics) data and models.

Where other platforms start from scratch with agent reasoning, Nova has deep behavioural baseline data. When a user does something anomalous, Nova's context isn't just "this IP hit a suspicious URL" — it's "this user's behaviour is 6.2 standard deviations from their 90-day baseline, they've never accessed this system before, and three other users in their peer group showed the same pattern last week."

Their recently announced AI Agent Behaviour Analytics capability extends this to monitoring AI agents themselves — detecting when deployed AI agents behave anomalously. First in market on that specific capability.

---

## What This Adds Up To

A few observations after working through all of this:

**The architectural divergence is real.** Tuskira is solving a fundamentally different problem than Dropzone AI. Charlotte AI is doing something different than Radiant Security. These platforms have genuinely different theories of what "autonomous SOC" means.

**Deployment complexity still matters.** The most technically sophisticated platforms (Tuskira, XSIAM) are also the most complex to deploy. For organisations that need value this quarter, Dropzone AI and Prophet Security offer a faster path.

**Data moats will likely determine the long-term winners.** CrowdStrike has Falcon endpoint telemetry. Palo Alto has firewall + XDR + cloud data. Exabeam has 10 years of UEBA behavioural data. The pure-plays are betting that reasoning quality beats data volume. The incumbents will catch up on reasoning while keeping their data advantage.

**The human-in-the-loop question varies more than you'd expect.** Every platform says they keep humans in control. What that means ranges from "human approves every action" to "human reviews the weekly summary." Worth understanding exactly what you're buying.

**Tier-1 triage is effectively a solved problem.** If your SOC is still manually triaging every alert, that's table-stakes automation now. The more interesting question is what happens at Tier 2 and Tier 3 — real investigation and response, not just sorting.

---

## The Question Worth Asking Every Vendor

*"Show me a real investigation, end to end, on a real alert, with no staging. What did the agent actually do, in what sequence, and how did it know to do that?"*

The ones who can answer that clearly are building real products. The ones who pivot to a slide deck are not there yet.

---

*If you're evaluating how agentic AI fits your SOC roadmap, [get in touch](/services/ai-consulting) — we help businesses navigate this space.*
