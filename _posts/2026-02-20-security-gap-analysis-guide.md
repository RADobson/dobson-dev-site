---
layout: post
title: "Is Your Security Stack Actually Protecting You? How to Find the Gaps"
description: "A practical guide to security gap analysis for IT managers. Learn how to identify control gaps in your security stack, use frameworks for structured assessment, and prioritise remediation based on real risk."
date: 2026-02-20
author: Richard Dobson
categories: [cybersecurity, strategy]
tags: [security-gap-analysis, security-posture, security-assessment, security-controls, risk-management, security-stack]
---

# Is Your Security Stack Actually Protecting You? How to Find the Gaps

You have an EDR. You have a firewall. You have MFA enabled. You might even have a SIEM. So you're protected, right?

Maybe. Maybe not.

Most organisations we assess have between three and seven significant security control gaps — areas where their tools and policies don't actually protect against common attack techniques. These aren't exotic, theoretical vulnerabilities. They're practical gaps that real attackers exploit routinely.

This guide walks you through how to find those gaps, how to assess their severity, and how to prioritise fixing them without unlimited budget.

## Why Your Security Stack Probably Has Gaps

### The tool sprawl problem

The average mid-sized organisation runs 40–60 security tools. Despite that investment, coverage gaps persist because:

- **Tools overlap in some areas and miss others entirely.** You might have three products that detect malware on endpoints but nothing watching for data exfiltration through cloud applications.
- **Configuration gaps.** A tool can be deployed but misconfigured — EDR in audit-only mode, firewall rules that are too permissive, MFA that allows SMS as a factor.
- **Integration gaps.** Tools that don't share data can't correlate events. An identity alert and a network alert that together indicate compromise might be investigated separately — or not at all.

### The assumption problem

Security teams often assume their tools cover certain threats without verifying. "We have a firewall, so network-based attacks are covered" is a common assumption that breaks down when you test it against specific attack techniques.

### The evolution problem

Your threat landscape changes faster than your security stack. New attack techniques, new cloud services, remote work patterns, AI-powered attacks — your tools were configured for last year's threats. Are they still relevant?

## A Framework-Based Approach to Gap Analysis

The most effective way to find gaps is to measure your controls against a structured framework. This removes guesswork and gives you a common language for discussing gaps with stakeholders.

### MITRE ATT&CK: The gold standard for detection gaps

The MITRE ATT&CK framework catalogues 200+ techniques that attackers use across the kill chain — from initial access through execution, persistence, lateral movement, to exfiltration and impact.

**How to use it for gap analysis:**

1. **Map your current detections** to ATT&CK techniques. For each technique, document whether you have:
   - Prevention (a control that blocks the technique)
   - Detection (an alert that fires when the technique is used)
   - Neither (a gap)

2. **Focus on the techniques that matter.** Not all 200+ techniques are equally likely. Prioritise based on:
   - Techniques commonly used against organisations like yours (industry, size, geography)
   - Techniques used in recent major breaches
   - Techniques your existing tools are designed to detect but may not be configured for

3. **Identify clusters of gaps.** If you have no coverage across an entire tactic (e.g., lateral movement or data exfiltration), that's a systemic gap that requires a new control, not just tuning an existing one.

### The Essential Eight: Baseline control gaps

For Australian organisations, the [Essential Eight maturity model](/2026/02/20/essential-eight-compliance-guide/) provides a practical baseline. Gaps against the Essential Eight aren't just security risks — they're increasingly compliance and insurance risks.

### CIS Controls: Prioritised security actions

The CIS Critical Security Controls (v8) provide 18 control groups prioritised by implementation effort and defensive value. They're particularly useful for organisations that want a broader assessment beyond detection — covering asset management, data protection, and security awareness as well.

## The Five Most Common Security Gaps We Find

Based on hundreds of assessments across Australian organisations, these are the gaps that appear most frequently.

### Gap 1: No visibility into lateral movement

**The problem:** An attacker compromises one endpoint. From there, they move laterally — accessing file shares, querying Active Directory, connecting to other systems — until they reach something valuable. Most SMBs have no detection for this.

**Why it persists:** EDR monitors individual endpoints. Firewalls monitor north-south traffic. Neither reliably detects east-west (internal) movement. Identity monitoring catches some techniques (pass-the-hash, Kerberoasting) but requires specific log sources and detections.

**How to fix it:**
- Enable and ingest Active Directory authentication logs
- Deploy EDR-based lateral movement detections (most major EDRs have them, but they're often not enabled by default)
- Consider network detection and response (NDR) for larger environments
- Implement network segmentation to limit lateral movement paths

### Gap 2: Cloud application blind spots

**The problem:** Your employees use dozens of SaaS applications — many of which you don't know about. Data flows through these applications without any security monitoring. An attacker who compromises a user's cloud identity can access email, SharePoint, OneDrive, and connected third-party apps without triggering any on-premises security controls.

**Why it persists:** Traditional security stacks are designed for on-premises infrastructure. Cloud application monitoring requires different tools (CASB, cloud-native audit logging) that many organisations haven't implemented.

**How to fix it:**
- Enable and ingest Microsoft 365 Unified Audit Logs (or Google Workspace audit logs)
- Deploy a CASB or use your cloud provider's native shadow IT discovery
- Review OAuth application permissions quarterly
- Implement Conditional Access policies to restrict access by device compliance and location

### Gap 3: Email-based attacks beyond basic filtering

**The problem:** Business email compromise (BEC) doesn't use malware or malicious links — an attacker impersonates a trusted contact and asks for a wire transfer, credential, or sensitive document. Basic email filtering doesn't catch it because there's nothing malicious to detect.

**Why it persists:** Traditional email security looks for known-bad indicators (malicious URLs, malware attachments, known phishing signatures). BEC attacks use none of these — they rely on social engineering and compromised or spoofed identities.

**How to fix it:**
- Deploy AI-powered email security (Abnormal Security, Proofpoint with AI features) that analyses communication patterns, not just content
- Implement DMARC, DKIM, and SPF to prevent email spoofing of your domain
- Enable mailbox forwarding rules alerting — attackers frequently set up rules to hide their activity
- Train staff on BEC patterns with practical examples, not generic phishing awareness

### Gap 4: No data exfiltration detection

**The problem:** Most organisations can't detect when large amounts of data leave their environment. An attacker (or malicious insider) can copy sensitive data to a personal cloud storage account, email it externally, or upload it through a web application — and nobody notices.

**Why it persists:** DLP (data loss prevention) tools are complex to implement and manage. Many organisations have bought DLP but never completed the classification and policy work needed to make it effective.

**How to fix it:**
- Start simple: monitor for bulk downloads from file shares and cloud storage
- Implement email DLP for sensitive data patterns (tax file numbers, credit card numbers, health identifiers)
- Use cloud-native DLP in Microsoft 365 or Google Workspace — it's included in higher licence tiers
- Monitor for USB device usage if your endpoints support it

### Gap 5: Backup and recovery gaps

**The problem:** Backups exist but haven't been tested. Or backups exist but aren't isolated from the production environment — meaning ransomware can encrypt the backups too. Or backups cover servers but not cloud data (SharePoint, email, SaaS application data).

**Why it persists:** Backups are boring until you need them. Testing restores takes time and rarely surfaces in security assessments that focus on prevention and detection.

**How to fix it:**
- Test restores quarterly — actually restore data, don't just verify backup jobs completed
- Implement immutable backups (write-once storage that can't be modified or deleted)
- Ensure backup accounts use separate credentials from your production environment
- Include cloud data in your backup strategy — Microsoft 365 data retention is not a backup

## How to Prioritise Remediation

You've identified your gaps. You can't fix them all at once. Here's how to prioritise.

### Risk-based prioritisation

For each gap, assess:

1. **Likelihood of exploitation** — Is this technique commonly used in attacks against organisations like yours?
2. **Impact if exploited** — What's the worst-case outcome? Data breach? Ransomware? Business interruption?
3. **Ease of remediation** — How much effort and cost to close the gap?

Prioritise gaps that are high-likelihood, high-impact, and low-effort to fix.

### The "blast radius" approach

For each gap, ask: "If an attacker exploits this, how far can they get?" A gap in lateral movement detection combined with flat network segmentation means a single compromised endpoint can lead to total domain compromise. That's a large blast radius — fix it first.

> ### 🔍 Find Your Security Gaps — Free Tools
>
> We've built three free tools to help you assess your security posture:
>
> **[Security Control Coverage Calculator](/tools/security-control-coverage)** — Map your security tools against common attack techniques to find coverage gaps.
>
> **[Security Stack Maturity Score](/tools/security-maturity-score)** — Get a holistic score across your entire security programme with specific improvement recommendations.
>
> **[Breach Blast Radius Simulator](/tools/breach-blast-radius)** — Model what happens when specific controls fail. Understand the blast radius of your gaps.
>
> **[Start your assessment →](/tools/security-control-coverage)**

### Quick wins vs strategic investments

Some gaps can be closed quickly with configuration changes:
- Enabling MFA on remaining accounts
- Turning on audit logging for cloud services
- Configuring EDR detections that are available but not enabled
- Implementing email forwarding rules alerting

Others require new tools or significant effort:
- Deploying network detection and response
- Implementing comprehensive DLP
- Achieving full application control (Essential Eight)

Do the quick wins first. They're often disproportionately effective — enabling existing but dormant capabilities is essentially free security improvement.

## Building a Continuous Assessment Practice

Gap analysis isn't a one-time exercise. Build it into your regular security operations:

**Monthly:** Review new detections and alerts. Are they catching real threats or generating noise? Tune and adjust.

**Quarterly:** Re-assess your coverage against MITRE ATT&CK. Have new techniques been added? Has your environment changed (new cloud services, new applications)?

**Annually:** Full security posture assessment. Review your Essential Eight maturity (use our [Essential Eight Gap Assessment](/tools/essential-eight-assessment)), assess your vendor stack (use our [Vendor Pricing Reality Checker](/tools/vendor-pricing-checker) to ensure you're getting value), and update your security roadmap.

**After every incident:** Every security incident is a gap analysis data point. What failed? What wasn't detected? What could have reduced the impact? Document and feed this into your next assessment.

## Measuring Improvement Over Time

Track these metrics to demonstrate progress:

- **ATT&CK technique coverage percentage** — What percentage of relevant techniques do you have prevention or detection for?
- **Mean time to detect (MTTD)** — How quickly do you identify threats?
- **Mean time to respond (MTTR)** — How quickly do you contain and remediate?
- **Essential Eight maturity levels** — Track your score across all eight strategies.
- **Open gap count** — How many identified gaps remain unresolved?

These metrics also make excellent board-level reporting. Executives may not understand individual controls, but they understand coverage percentages and trend lines.

## Final Thoughts

The uncomfortable truth about security stacks: more tools doesn't mean more protection. A focused set of well-configured, well-monitored tools will outperform a bloated stack of shelfware every time.

Start by finding your gaps. Prioritise based on real risk. Fix the quick wins. Plan for the strategic investments. And measure your progress over time.

Your security stack should work as hard as you do. **[Find out if it does →](/tools/security-control-coverage)**
