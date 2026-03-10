---
layout: post
title: "What Log Sources Should You Ingest First? A SIEM Priority Guide"
description: "A practical prioritisation framework for SIEM log sources. Learn which logs deliver the most detection value per dollar, common mistakes, and how to build your log ingestion strategy without blowing your budget."
date: 2026-02-20
author: Richard Dobson
categories: [cybersecurity, SIEM]
tags: [SIEM, log-sources, log-management, detection-engineering, security-monitoring, SIEM-implementation]
---

# What Logs Should You Ingest First? (Before Your SIEM Bill Bankrupts You)

Here's a story we see constantly: organisation buys a SIEM, connects everything, gets a six-figure annual ingestion bill, then can't afford the log sources that actually catch attackers.

Log source selection is one of the most consequential decisions in a SIEM deployment. Get it right: meaningful threat detection at manageable cost. Get it wrong: you're paying a fortune to store data nobody looks at.

## Why This Matters

### Cost scales with volume

Most SIEMs — Sentinel, Splunk, Chronicle, Elastic — charge by data ingestion. The gap between a curated strategy and "ingest everything" can be 5–10x in annual cost.

For a 200-endpoint org:

| Log Source | Daily Volume | Cost Impact |
|---|---|---|
| Firewall (all traffic) | 10–50 GB/day | $$$$ |
| Windows Event Logs (all) | 5–20 GB/day | $$$ |
| EDR telemetry | 2–5 GB/day | $$ |
| Authentication logs | 0.5–2 GB/day | $ |
| DNS logs | 1–5 GB/day | $$ |

Raw firewall flow logs can easily be 50–70% of your total SIEM cost. Is that where your detection value is? Almost never.

### Not all logs are created equal

Some are critical for detecting common attacks. Others are useful for compliance or forensics but rarely trigger detections. Prioritise **detection value per dollar**.

### You can always add more later

Start focused, expand from gaps. Dramatically better than starting with everything and cutting when the bill arrives.

## The Five Mistakes Everyone Makes

**1. Ingesting everything on day one.** "We'll figure out what we need later" guarantees cost overruns and alert fatigue. Months tuning out noise from low-value sources while you struggle to detect what matters.

**2. Letting the vendor decide.** Having a connector doesn't mean you should use it. Vendors maximise ingestion (that's how they charge). Your goal is detection value per dollar.

**3. Skipping authentication logs.** We've seen orgs ingest terabytes of firewall data while skipping Entra ID sign-in logs. Auth logs are among the highest-value, lowest-volume sources you can ingest — the foundation for detecting credential theft, lateral movement, and privilege escalation.

**4. Not filtering at source.** Windows Event Logs include thousands of event IDs — a few dozen matter for security detection. Ingesting all at full fidelity is expensive and unnecessary.

**5. Forgetting cloud.** M365, Google Workspace, AWS, Azure audit logs are some of the most valuable sources you can ingest — and consistently overlooked in favour of traditional on-prem.

## The Priority Framework

Three dimensions: **detection value** (ATT&CK coverage), **volume/cost**, and **implementation effort**.

### Tier 1: Ingest These First

The foundation for detecting the most common attacks.

**Identity and authentication logs**
- Azure AD / Entra ID sign-in and audit logs
- On-prem Active Directory (Security Event Log, filtered)
- MFA and Conditional Access logs

**Detects:** Credential attacks, privilege escalation, impossible travel, account compromise, persistence via new credentials.

**EDR alerts and telemetry**
- CrowdStrike, SentinelOne, Defender for Endpoint alerts
- Process creation events (if not covered by EDR)

**Detects:** Malware execution, living-off-the-land, lateral movement, persistence. Note: ingest EDR *alerts* into your SIEM. Only ingest raw *telemetry* if you're doing advanced threat hunting.

**Cloud platform audit logs**
- M365 Unified Audit Log
- Azure Activity Logs / AWS CloudTrail / Google Workspace Admin logs

**Detects:** BEC, cloud data exfiltration, privilege escalation, malicious OAuth consent.

**Email security logs**
- Gateway logs (Proofpoint, Mimecast, Defender for Office 365)
- Phishing reports

**Detects:** Phishing delivery, malicious attachments/links, email forwarding rules (key BEC indicator).

### Tier 2: Add Next

Once Tier 1 is ingested with detections running.

**DNS logs**
- Query logs from DNS servers or security tools (Umbrella, Infoblox)

**Detects:** C2 communication, DNS tunnelling, DGA domains. Nearly every piece of malware resolves a domain — DNS is one of the most reliable compromise indicators.

**Tip:** High volume. Ingest unique queries only or filter known-good domains to cut volume 60–80%.

**Web proxy / URL filtering**
- Zscaler, Netskope, Palo Alto Prisma, or on-prem proxy logs

**Detects:** Malicious URL access, web-based exfiltration, policy violations, shadow IT.

**VPN and remote access**
- VPN concentrator, RD gateway, zero-trust access logs

**Detects:** Unauthorised remote access, anomalous VPN connections, brute force against VPN infrastructure.

**Firewall logs (filtered)**
- Denied traffic only (not full flows)
- Known malicious IP traffic
- Unusual port connections

**Detects:** Network scanning, lateral movement attempts, C2 over unusual ports. Filtering to denied traffic and anomalous connections cuts volume 80–90% while keeping most detection value.

### Tier 3: For Mature Operations

**Expanded Windows Event Logs**
- PowerShell Script Block Logging (4104), WMI activity, scheduled task creation, service installation

**Detects:** Living-off-the-land, fileless malware, persistence. Requires specific audit policies — not logged by default.

**NDR (Network Detection and Response)**
- Packet metadata from Darktrace, ExtraHop, Vectra, Corelight

**Detects:** Lateral movement, exfiltration, encrypted C2. High volume, high cost — only if you have analysts to investigate.

**Application-specific logs**
- Database audit logs, SaaS app logs, custom application logs

**Vulnerability scanner results**
- Tenable, Qualys, Rapid7 — ingested as enrichment context, not direct detection.

## Logs Without Detections = Expensive Storage

For each source you add, plan your detections:

- **Start with built-in rules.** Sentinel has 1,000+. Splunk has Threat Research detections. Enable what applies.
- **Map to MITRE ATT&CK.** Our [Security Control Coverage Calculator](/tools/security-control-coverage) identifies technique coverage gaps.
- **Measure coverage over time.** Which techniques can you detect? Which are gaps? That drives what you add next.

> ### 📊 Calculate Your Log Source Priorities — Free Tool
>
> Our **[Log Source Priority Calculator](/tools/log-source-calculator)** ranks log sources by detection value, cost, and your specific environment.
>
> **[Calculate your priorities →](/tools/log-source-calculator)**

## Cost Optimisation

**Use log tiers.** Sentinel has Analytics (hot) and Basic (cold). Splunk has index tiers. High-volume, low-detection sources go into cheaper tiers — searchable but not running real-time analytics.

**Filter at source.** XML query filters for Windows events. Denied-only for firewalls. Security-relevant IDs only.

**Aggregate and deduplicate.** DNS logs deduped to unique queries per source IP per hour cuts volume 70%+ with minimal detection impact.

**Set ingestion budgets.** Monthly cap allocated by detection value. New source proposed? Evaluate against existing — would the budget be better spent on more data from current sources?

**Review quarterly.** Volumes shift as environments grow. Identify unexpected growth. Ask if the detection value still justifies cost.

## Realistic SIEM Budget (200-Endpoint Australian SMB)

| Component | Monthly Cost (AUD) |
|---|---|
| SIEM platform (Sentinel, Splunk Cloud, etc.) | $2,000–$5,000 |
| Log ingestion (Tier 1 + 2) | $1,500–$4,000 |
| Detection rule management (MSP or in-house) | $2,000–$5,000 |
| **Total** | **$5,500–$14,000/month** |

Significant investment. That's precisely why priorities matter — every dollar on low-value logs is a dollar not spent on detection engineering or analyst time.

## The Bottom Line

The best SIEM deployment we've seen ingested six log sources. The worst ingested forty. The difference wasn't volume — it was whether anyone wrote detections for them and whether the logs mapped to real threats.

Start with Tier 1. Build detections. Measure coverage. Expand based on gaps, not vendor checklists.

**[Build your plan with our free Log Source Priority Calculator →](/tools/log-source-calculator)**

Also evaluating your broader posture? Our [Essential Eight Gap Assessment](/tools/essential-eight-assessment) and [Security Stack Maturity Score](/tools/security-maturity-score) show where SIEM fits in your overall programme.
