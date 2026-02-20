---
layout: post
title: "What Log Sources Should You Ingest First? A SIEM Priority Guide"
description: "A practical prioritisation framework for SIEM log sources. Learn which logs deliver the most detection value per dollar, common mistakes, and how to build your log ingestion strategy without blowing your budget."
date: 2026-02-20
author: Dobson Development
categories: [cybersecurity, SIEM]
tags: [SIEM, log-sources, log-management, detection-engineering, security-monitoring, SIEM-implementation]
---

# What Log Sources Should You Ingest First? A SIEM Priority Guide

Here's a scenario we see constantly: an organisation buys a SIEM, connects everything they can think of, gets hit with a six-figure annual ingestion bill, and then can't afford to keep the log sources that actually matter for detection.

Log source selection is one of the most consequential decisions in any SIEM deployment. Get it right and you have meaningful threat detection at a manageable cost. Get it wrong and you're paying a fortune to store data nobody looks at while missing the logs that would actually catch attackers.

## Why Log Source Priority Matters

### Cost is directly tied to volume

Most modern SIEMs — Microsoft Sentinel, Splunk, Google Chronicle, Elastic — charge based on data ingestion volume. The difference between a well-curated log strategy and an "ingest everything" approach can be 5–10x in annual cost.

A typical breakdown for a 200-endpoint organisation:

| Log Source | Daily Volume | Annual Cost Impact |
|---|---|---|
| Firewall (all traffic) | 10–50 GB/day | $$$$ |
| Windows Event Logs (all) | 5–20 GB/day | $$$ |
| EDR telemetry | 2–5 GB/day | $$ |
| Authentication logs | 0.5–2 GB/day | $ |
| DNS logs | 1–5 GB/day | $$ |

Ingesting raw firewall flow logs can easily be 50–70% of your total SIEM cost. Is that where your detection value is? Usually not.

### Not all logs are equal for detection

Some log sources are critical for detecting common attack techniques. Others are useful for compliance or forensics but rarely trigger detections. Your priority should be detection value per dollar.

### You can always add more later

Starting with a focused set of high-value log sources and expanding over time is dramatically better than starting with everything and cutting back when the bill arrives.

## The Common Mistakes

### Mistake 1: Ingesting everything from day one

"We'll figure out what we need once it's all in the SIEM." This approach guarantees cost overruns and alert fatigue. You'll spend months tuning out noise from low-value sources while struggling to write detections for the logs that matter.

### Mistake 2: Letting the SIEM vendor decide

SIEM vendors provide connectors for hundreds of log sources. Having a connector doesn't mean you should use it. Vendors are incentivised to maximise ingestion (that's how they charge). Your incentive is to maximise detection value per dollar spent.

### Mistake 3: Ignoring authentication logs

We've seen organisations ingest terabytes of firewall data while skipping Azure AD/Entra ID sign-in logs. Authentication logs are among the highest-value, lowest-volume sources you can ingest. They're the foundation for detecting credential theft, lateral movement, and privilege escalation.

### Mistake 4: Not filtering at the source

Most log sources can be filtered before ingestion. Windows Event Logs, for example, include thousands of event IDs — but only a few dozen are relevant for security detection. Ingesting all Windows events at full fidelity is expensive and unnecessary.

### Mistake 5: Forgetting about cloud

If your organisation uses Microsoft 365, Google Workspace, AWS, or Azure, those cloud audit logs are some of the most valuable sources you can ingest — and they're often overlooked in favour of traditional on-premises sources.

## A Prioritisation Framework

We rank log sources across three dimensions:

1. **Detection value** — How many MITRE ATT&CK techniques can you detect with this source?
2. **Volume and cost** — How much data does it generate relative to its detection value?
3. **Implementation effort** — How hard is it to connect, parse, and build detections?

### Tier 1: Ingest these first (High value, moderate volume)

These log sources provide the foundation for detecting the most common attack techniques. Start here.

**Identity and authentication logs**
- Azure AD / Entra ID sign-in and audit logs
- On-premises Active Directory (Security Event Log, filtered)
- MFA logs
- Conditional Access policy logs

**Detection value:** Credential attacks, privilege escalation, impossible travel, account compromise, persistence via new credentials.

**Endpoint detection and response (EDR)**
- CrowdStrike, SentinelOne, Defender for Endpoint alerts and telemetry
- Process creation events (if not covered by EDR)

**Detection value:** Malware execution, living-off-the-land attacks, lateral movement, persistence mechanisms. Note: Most EDRs have their own detection engine. Ingest EDR *alerts* into your SIEM; only ingest raw EDR *telemetry* if you're doing advanced threat hunting.

**Cloud platform audit logs**
- Microsoft 365 Unified Audit Log
- Azure Activity Logs
- AWS CloudTrail
- Google Workspace Admin logs

**Detection value:** Business email compromise, data exfiltration via cloud apps, privilege escalation in cloud environments, malicious OAuth app consent.

**Email security logs**
- Email gateway logs (Proofpoint, Mimecast, Microsoft EOP/Defender for Office 365)
- Phishing report logs

**Detection value:** Phishing delivery, malicious attachment/link detection, email forwarding rules (a key BEC indicator).

### Tier 2: Add these next (Good value, variable volume)

Once your Tier 1 sources are ingested and you have detections running, add these.

**DNS logs**
- DNS query logs from your DNS servers or DNS security tools (Cisco Umbrella, Infoblox)

**Detection value:** Command and control communication, DNS tunnelling, DGA domain detection, malicious domain resolution. DNS is one of the most reliable indicators of compromise — nearly every piece of malware needs to resolve a domain.

**Tip:** DNS logs can be high-volume. Consider ingesting only *unique* queries or filtering out known-good domains to reduce volume by 60–80%.

**Web proxy / URL filtering logs**
- Zscaler, Netskope, Palo Alto Prisma Access, or on-premises proxy logs

**Detection value:** Malicious URL access, data exfiltration via web, policy violations, shadow IT discovery.

**VPN and remote access logs**
- VPN concentrator logs
- Remote desktop gateway logs
- Zero-trust access logs (Zscaler Private Access, Cloudflare Access)

**Detection value:** Unauthorised remote access, anomalous VPN connections, brute force attacks against VPN infrastructure.

**Firewall logs (filtered)**
- Denied traffic only (not full flow logs)
- Traffic to/from known malicious IPs
- Connections on unusual ports

**Detection value:** Network scanning, lateral movement attempts, command and control over unusual ports. Filtering firewall logs to denied traffic and anomalous connections reduces volume by 80–90% while retaining most detection value.

### Tier 3: Add for maturity (Situational value)

These sources add depth for organisations with mature security operations.

**Windows Event Logs (expanded)**
- PowerShell Script Block Logging (Event ID 4104)
- WMI activity
- Scheduled task creation
- Service installation

**Detection value:** Living-off-the-land techniques, fileless malware, persistence mechanisms. These require specific audit policies to be enabled — they're not logged by default.

**Network detection and response (NDR)**
- Full packet metadata or flow data from Darktrace, ExtraHop, Vectra, or Corelight

**Detection value:** Lateral movement, data exfiltration, encrypted C2 traffic analysis. High volume, high cost — only justified if you have analysts who can investigate NDR alerts.

**Application-specific logs**
- Database audit logs (SQL Server, PostgreSQL)
- SaaS application logs (Salesforce, ServiceNow)
- Custom application logs

**Detection value:** Insider threat, data access anomalies, application-level attacks.

**Vulnerability scanner results**
- Tenable, Qualys, or Rapid7 scan results ingested as context

**Detection value:** Not direct detection — used to enrich alerts with vulnerability context (e.g., "this compromised host has three critical unpatched vulnerabilities").

## Building Your Detection Strategy Around Log Sources

Ingesting logs without detections is just expensive storage. For each log source you add, plan your detections:

### Start with known-good detection rules

Every major SIEM has a content library. Microsoft Sentinel has 1,000+ analytics rules. Splunk has the Threat Research Team detections. Enable the rules that apply to your ingested log sources.

### Map to MITRE ATT&CK

Use the MITRE ATT&CK framework to ensure your detections cover the techniques most relevant to your threat model. Our [Security Control Coverage Calculator](/tools/security-control-coverage) can help you identify which ATT&CK techniques your current tools and detections cover.

### Measure coverage over time

Track which MITRE ATT&CK techniques you can detect and which are gaps. This drives your decision about which log sources to add next.

> ### 📊 Calculate Your Log Source Priorities — Free Tool
>
> Our **[Log Source Priority Calculator](/tools/log-source-calculator)** helps you prioritise log sources based on detection value, cost, and your specific environment. Input your infrastructure details and get a ranked list of which logs to ingest first.
>
> **[Calculate your priorities →](/tools/log-source-calculator)**

## Cost Optimisation Strategies

### Use log tiers

Most modern SIEMs offer tiered storage. Microsoft Sentinel has Analytics (hot) and Basic (cold) tiers. Splunk has different index tiers. High-volume, low-detection-value logs (like full firewall flows) can go into cheaper tiers where they're available for search but don't run real-time analytics.

### Filter at the source

Configure your log sources to send only relevant events. For Windows Event Logs, use XML query filters to send only security-relevant event IDs. For firewalls, filter to denied traffic and specific allow rules.

### Aggregate and deduplicate

Some log sources generate redundant data. DNS logs, for example, can be deduplicated to unique queries per source IP per hour, reducing volume by 70%+ with minimal detection impact.

### Set ingestion budgets

Establish a monthly ingestion budget and allocate it across log sources based on detection value. When a new source is proposed, evaluate it against existing sources — would the budget be better spent on more data from existing sources or new data from this source?

### Review quarterly

Log volumes change as your environment grows. Review your ingestion costs quarterly, identify sources that are growing unexpectedly, and evaluate whether the detection value justifies the cost.

## A Realistic SIEM Budget for Australian SMBs

For a 200-endpoint organisation, here's what a well-architected SIEM deployment typically costs:

| Component | Monthly Cost (AUD) |
|---|---|
| SIEM platform (e.g., Sentinel, Splunk Cloud) | $2,000–$5,000 |
| Log ingestion (Tier 1 + Tier 2 sources) | $1,500–$4,000 |
| Detection rule management (MSP or in-house) | $2,000–$5,000 |
| **Total** | **$5,500–$14,000/month** |

This is a significant investment. That's exactly why getting your log source priorities right matters — every dollar spent ingesting low-value logs is a dollar not spent on detection engineering or analyst time.

## Final Thoughts

The best SIEM deployment we've ever seen ingested six log sources. The worst ingested forty. The difference wasn't the number of sources — it was whether anyone was writing detections for them and whether the logs actually mapped to real threats.

Start with Tier 1. Build detections. Measure your coverage. Add sources based on gaps, not on vendor recommendations or checkbox thinking.

**[Use our free Log Source Priority Calculator to build your plan →](/tools/log-source-calculator)**

If you're also evaluating your overall security posture, our [Essential Eight Gap Assessment](/tools/essential-eight-assessment) and [Security Stack Maturity Score](/tools/security-maturity-score) can help you understand where SIEM fits in your broader security programme.
