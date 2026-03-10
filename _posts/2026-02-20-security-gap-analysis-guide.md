---
layout: post
title: "Is Your Security Stack Actually Protecting You? How to Find the Gaps"
description: "A practical guide to security gap analysis for IT managers. Learn how to identify control gaps in your security stack, use frameworks for structured assessment, and prioritise remediation based on real risk."
date: 2026-02-20
author: Richard Dobson
categories: [cybersecurity, strategy]
tags: [security-gap-analysis, security-posture, security-assessment, security-controls, risk-management, security-stack]
---

# Is Your Security Stack Actually Protecting You?

You have an EDR. A firewall. MFA enabled. Maybe a SIEM. So you're protected, right?

Maybe. Probably not entirely.

Most organisations we assess have three to seven significant control gaps — areas where their tools don't actually protect against common attack techniques. Not exotic, theoretical vulnerabilities. Practical gaps that real attackers exploit routinely.

Here's how to find them, assess them, and fix the ones that matter most.

## Why Your Stack Has Gaps

### Tool sprawl ≠ coverage

The average mid-sized org runs 40–60 security tools. Gaps persist because:

- **Overlap without coverage.** Three products detecting endpoint malware, nothing watching for data exfiltration through cloud apps.
- **Configuration gaps.** EDR in audit-only mode. Overly permissive firewall rules. MFA that allows SMS.
- **Integration gaps.** Tools that don't share data can't correlate events. An identity alert and a network alert that together scream "compromise" get investigated separately — or not at all.

### The assumption trap

Security teams assume their tools cover certain threats without verifying. "We have a firewall, so network-based attacks are covered" breaks down fast against specific techniques.

### The evolution problem

Your threat landscape shifts faster than your stack. New techniques, new cloud services, remote work patterns, AI-powered attacks — your tools were configured for last year's threats.

## Framework-Based Gap Analysis

The most effective way to find gaps is measuring controls against a structured framework. Removes guesswork. Gives you a common language for discussing gaps with stakeholders.

### MITRE ATT&CK: The gold standard

200+ catalogued attacker techniques across the kill chain. Use it:

1. **Map current detections** to ATT&CK techniques. For each: do you have prevention, detection, or neither?
2. **Focus on what matters.** Not all 200+ techniques are equally likely. Prioritise by industry, recent breaches, and your existing tool capabilities.
3. **Spot systemic gaps.** Zero coverage across an entire tactic (lateral movement, exfiltration) means you need a new control, not just tuning.

### Essential Eight

For Australian orgs, the [Essential Eight maturity model](/2026/02/20/essential-eight-compliance-guide/) provides a practical baseline. Gaps here aren't just security risks — they're increasingly compliance and insurance risks too.

### CIS Controls v8

18 prioritised control groups covering asset management, data protection, and awareness alongside detection. Useful for broader assessments beyond just detection.

## The Five Gaps We Find Everywhere

### 1. No lateral movement visibility

An attacker compromises one endpoint. Then moves laterally — file shares, Active Directory queries, other systems — until they reach something valuable. Most SMBs have zero detection for this.

**Why:** EDR watches individual endpoints. Firewalls watch north-south traffic. Neither reliably catches east-west movement.

**Fix:** Enable AD authentication log ingestion. Turn on EDR lateral movement detections (often available but not enabled). Consider NDR for larger environments. Implement network segmentation.

### 2. Cloud application blind spots

Employees use dozens of SaaS apps, many unknown to IT. An attacker with a compromised cloud identity accesses email, SharePoint, OneDrive, and connected third-party apps — no on-prem security control fires.

**Why:** Traditional stacks are built for on-prem. Cloud monitoring needs different tools (CASB, cloud-native audit logging) most orgs haven't deployed.

**Fix:** Enable M365 Unified Audit Logs (or Google Workspace equivalent). Deploy CASB or cloud-native shadow IT discovery. Review OAuth app permissions quarterly. Implement Conditional Access.

### 3. BEC slips past basic email filtering

Business email compromise doesn't use malware or malicious links. An attacker impersonates a trusted contact and asks for a wire transfer. Basic filtering catches nothing because there's nothing malicious to detect.

**Why:** Traditional email security looks for known-bad indicators. BEC uses none.

**Fix:** AI-powered email security (Abnormal Security, Proofpoint with AI) that analyses communication patterns. DMARC, DKIM, SPF. Mailbox forwarding rules alerting. Staff training on BEC patterns with real examples.

### 4. No data exfiltration detection

Most organisations can't detect large-scale data leaving their environment. Personal cloud storage, external email, web uploads — nobody notices.

**Why:** DLP tools are complex. Many orgs bought DLP but never finished the classification work to make it effective.

**Fix:** Start simple — monitor bulk downloads from file shares and cloud storage. Email DLP for sensitive patterns (TFNs, credit cards, health IDs). Cloud-native DLP in M365 or Google Workspace (included in higher tiers). Monitor USB usage.

### 5. Backup and recovery gaps

Backups exist but aren't tested. Or aren't isolated from production — ransomware encrypts them too. Or cover servers but not cloud data.

**Why:** Backups are boring until you need them. Testing restores rarely surfaces in prevention-focused assessments.

**Fix:** Test restores quarterly — actually restore data. Immutable backups (write-once). Separate backup credentials from production. Include cloud data — M365 retention is not a backup.

## Prioritising Remediation

You've found the gaps. You can't fix them all at once.

### Risk-based priority

For each gap, assess:
1. **Likelihood** — Is this technique commonly used against orgs like yours?
2. **Impact** — Worst case? Breach? Ransomware? Business interruption?
3. **Effort** — How much to close it?

High-likelihood, high-impact, low-effort = fix first.

### The blast radius test

"If an attacker exploits this, how far do they get?" Lateral movement gaps plus flat network segmentation means one endpoint leads to total domain compromise. Large blast radius = fix first.

> ### 🔍 Find Your Security Gaps — Free Tools
>
> **[Security Control Coverage Calculator](/tools/security-control-coverage)** — Map your tools against common attack techniques.
>
> **[Security Stack Maturity Score](/tools/security-maturity-score)** — Holistic score with improvement recommendations.
>
> **[Breach Blast Radius Simulator](/tools/breach-blast-radius)** — Model what happens when controls fail.
>
> **[Start your assessment →](/tools/security-control-coverage)**

### Quick wins vs strategic bets

Quick wins (config changes, enabling dormant capabilities):
- MFA on remaining accounts
- Cloud audit logging
- EDR detections available but not enabled
- Email forwarding rules alerting

Strategic investments (new tools, significant effort):
- Network detection and response
- Comprehensive DLP
- Full application control

Do the quick wins first. Enabling existing but dormant capabilities is essentially free security improvement.

## Build a Continuous Practice

Gap analysis isn't a one-time exercise.

**Monthly:** Review detections. Real threats or noise? Tune and adjust.

**Quarterly:** Re-assess against MITRE ATT&CK. New techniques? Environment changes?

**Annually:** Full posture assessment. [Essential Eight Gap Assessment](/tools/essential-eight-assessment), [Vendor Pricing Reality Checker](/tools/vendor-pricing-checker), updated roadmap.

**After every incident:** What failed? What wasn't detected? What reduces impact next time? Document and feed into the next assessment.

## Track What Matters

- **ATT&CK coverage %** — techniques with prevention or detection
- **MTTD** — how quickly you spot threats
- **MTTR** — how quickly you contain and remediate
- **E8 maturity levels** — across all eight strategies
- **Open gap count** — unresolved identified gaps

These also make excellent board reporting. Executives may not understand individual controls, but they understand coverage percentages and trend lines.

## The Bottom Line

More tools doesn't mean more protection. A focused set of well-configured, well-monitored tools outperforms a bloated stack of shelfware every time.

Find your gaps. Prioritise by real risk. Fix the quick wins. Plan the strategic investments. Measure progress.

**[Find out if your stack is actually working →](/tools/security-control-coverage)**
