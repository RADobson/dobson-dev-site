---
layout: post
title: "Building Ultrathink: A Private, Self-Hosted Second Brain"
date: 2026-01-16
tags: [automation, python, telegram, ai, claude]
excerpt: "How a complex stack of no-code tools became a simple 600-line Python script, thanks to Claude Code."
---

*How a complex stack of no-code tools became a simple 600-line Python script*

---

I watched an incredible video by Nate B. Jones the other day which recommended that now - in 2026 - it is finally time to implement a "second brain" system.

Go and watch it and come back - https://youtu.be/0TpON5T-Sw4?si=SaJwfnb3q7y7cAcW - I'll wait. Trust me its really good.

I first heard of the "second brain" concept about 9 years ago on a Tim Ferriss podcast, while doing fasted walking at the gym early one morning, shortly before Donald Trump was inaugurated President for the first time.

![Donald Trump Chicken](./images.sbs.com.jpg)

I really to do it - with Evernote - back when that was a thing. But I could never make it work because I'm too scatter-brained. Getting on top of all the tagging and folder organisation and systematising was impossible for me to maintain for any length of time. So I gave up.

But watching Nate B. Jones' video inspired me to try again.

The epiphany that he provided was that no - in 2026 - the technology exists to automate all that tagging and systematising - so that the only task that is incumbent on the human in the loop is just to remember to capture the thoughts that arise. That's it. That's all you have to do. Using AI - the second-brain system should be able to organise itself automatically. And furthermore - it should be able to surface relevant information and data points back into your attention at the appropriate time - without you manually having to recall it from the deep dark depths of your nervous system.

The stack that Nate B. Jones recommended was comprised of 4 popular tools:
1. **Slack** for capture
2. **Zapier** for automation
3. **ChatGPT** for processing brainpower
4. **Notion** for storage

But there's just one problem - I don't like Slack. I'm one of the few who prefers Teams (crazy I know). 

Never been a fan of Zapier either - I always used IFTTT back in the old days - and these days I use n8n.

AAAND I've never used Notion before either. As I said - I was a big Evernote user - until Evernote was ruined. Since then I've played around with Obsidian.

So Nate's Slack + Notion + Zapier stack didn't suit me:
- I wanted **privacy** - my thoughts in local Markdown files, not SaaS databases
- I wanted **control** - no API rate limits or "you've hit your automation cap"
- I wanted **cost efficiency** - $0/month, not $50+

So I set out to build Nate's second brain system MY way.

What followed was a journey through increasingly complex infrastructure... until a moment of clarity simplified everything.

## The Over-Engineered First Attempt 

- Instead of using Slack, I decided to use **Telegram** for capture. This ended up being a solid choice, and is basically the only component that survived the cull and made it into prod.
- Instead of using Zapier, I tried **n8n** for automation workflows - Self-hosted. Open-soure. Free. Sounds perfect, right?
- Instead of using Notion, I tried **Obsidian** - running headlessly in Docker Yes, the desktop app, in a container. I had to spoof it into thinking it had a UI. It was ridiculous.
- **CouchDB** as the sync backend
- **LiveSync plugin** to bridge Obsidian with CouchDB
- **Caddy** as a reverse proxy with automatic HTTPS
- **Claude Sonnet 4.5** as the AI API

Four n8n workflow JSON files. Six Docker containers. A "Headless Ghost" architecture where Obsidian watched for filesystem changes and synced them to CouchDB so my iPad could see updates.

It worked. Technically. But it was fragile. Obsidian's Docker container would occasionally crash. The n8n workflows were visual spaghetti that I couldn't easily version control. LiveSync had edge cases. I spent more time debugging the infrastructure than actually using the system.

The irony wasn't lost on me: I'd built a complex system to reduce cognitive load, and the system itself was creating cognitive load.

## The Brainwave

One evening, staring at another CouchDB sync error, I had a thought: *I'm a developer. Claude Code is sitting right there. Why am I fighting with no-code tools?*

The entire n8n workflow logic - classify a message, write a file, send a confirmation - was maybe 50 lines of actual logic buried under layers of visual node configuration. The "headless Obsidian" hack existed only because I needed something to run the LiveSync plugin. But if I'm writing directly to the filesystem... I don't need sync. The files are already there.

I opened Claude Code and said: "Replace all of this with a single Python script."

## The Result: 600 Lines of Python

What emerged was `ultrathink.py` - a single file that does everything:

```
ultrathink/
├── ultrathink.py       # The entire system
├── Dockerfile          # Python 3.12 slim
├── docker-compose.yml  # One service
├── requirements.txt    # 6 dependencies
└── vault/              # Flat markdown files
    ├── People/
    ├── Projects/
    ├── Ideas/
    ├── Admin/
    └── Inbox-Log.md
```

One container instead of six. No n8n, no Obsidian, no CouchDB, no Caddy.

The Python script has five components:

| Component | Purpose |
|-----------|---------|
| `VaultService` | Read/write markdown with YAML frontmatter |
| `ClaudeService` | Classify messages, extract fields, generate briefings |
| `StateManager` | Track pending clarifications in memory |
| `handle_message()` | Capture flow: classify → route → file or bounce |
| Scheduled jobs | Morning briefing (7 AM) and weekly review (Sunday 4 PM) |

That's it. The same functionality, in a form I can actually understand and maintain.

## Why This Matters Beyond My Use Case

The lesson here isn't "Python good, n8n bad." The lesson is: **match the tool to the problem**.

No-code tools are excellent for:
- Non-developers who need automation
- Rapid prototyping before you know what you want
- Integrations between many third-party services

But when your "no-code" solution involves:
- Running desktop apps headlessly in Docker
- Multiple databases for sync
- Workflow JSONs that can't be diffed
- Debug sessions longer than rewriting the logic

...it's time to write code.

Claude Code made this trivial. I described what I wanted, it generated the script, I tested it, we iterated. The entire rewrite took less time than my last n8n debugging session.

## The 8 Building Blocks (Still Valid)

Nate's conceptual framework remains solid. Here's how the Python script implements each:

### 1. The Dropbox (Capture Point)
A private Telegram chat. Type or voice-note, hit send. Zero decisions at capture time.

### 2. The Sorter (Classifier)
Claude receives the message and classifies into one of four categories:

| Category | What goes here |
|----------|----------------|
| **People** | Relationships, contacts, conversations |
| **Projects** | Active work with next actions |
| **Ideas** | Thoughts to explore later |
| **Admin** | Logistics, appointments, errands |

### 3. The Form (Schema)
Each category has fields that Claude extracts - name, context, next_action, notes. YAML frontmatter makes it machine-readable.

### 4. The Filing Cabinet (Storage)
Flat markdown files in folders. No database, no sync layer. Just files.

### 5. The Receipt (Audit Trail)
Every capture logs to `Inbox-Log.md` with timestamp, category, confidence, and status.

### 6. The Bouncer (Confidence Filter)
When Claude's confidence is below 60%, the bot asks "Which category?" instead of filing. Prevents the junk drawer problem.

### 7. The Tap on Shoulder (Proactive Surfacing)
- **Daily (7 AM)**: TOP 3 ACTIONS, STUCK ON, SMALL WIN
- **Weekly (Sunday 4 PM)**: WHAT HAPPENED, OPEN LOOPS, NEXT WEEK, THEME

### 8. The Fix Button (Correction Mechanism)
Reply to any filing with `fix: admin` to move it. One message, instant correction.

## The 12 Principles (Also Still Valid)

1. **Reduce the human's job to one reliable behavior.** Capture only. Everything else is automation.

2. **Separate memory from compute from interface.** Vault files, Python logic, Telegram UI.

3. **Treat prompts like APIs.** Fixed input, fixed output, JSON schema.

4. **Always build a trust mechanism.** Logs, confidence scores, fix command.

5. **Default to safe behavior when uncertain.** Ask, don't file.

6. **Make output small, frequent, actionable.** 150 words max for dailies.

7. **Use next action as the unit of execution.** Not "work on website" but "email Sarah by Friday."

8. **Prefer routing over organizing.** Claude routes, users don't maintain.

9. **Keep fields painfully small.** 3-5 fields max per category.

10. **Design for restart, not perfection.** Easy to resume after falling off.

11. **Build one workflow, then attach modules.** Core loop first.

12. **Optimize for maintainability over cleverness.** One file beats six containers.

## The Stack (Simplified)

| Component | What it does |
|-----------|--------------|
| **Telegram** | Capture interface |
| **Python script** | Classification, filing, briefings |
| **Claude API** | The AI brain |
| **Flat files** | Storage |

Total cost: **$0/month** on Oracle Cloud Always Free tier.

## Getting Started

```bash
# Clone the repo
git clone https://github.com/RADobson/ultrathink_2b.git
cd ultrathink_2b

# Configure
cp .env.example .env
# Edit .env with your TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, ANTHROPIC_API_KEY

# Launch
docker compose up -d
```

Create your Telegram bot via `@BotFather`, get your chat ID from `@userinfobot`, and you're done.

Test it:
```
You: Call Sarah about the Q3 budget by Friday
Bot: Filed as PROJECTS: 'Sarah Q3 Budget Call' (87%)
```

Commands:
- `/briefing` - trigger morning briefing manually
- `/review` - trigger weekly review manually
- `/status` - show vault note counts

## Conclusion

I spent days wrestling with n8n visual workflows, CouchDB replication conflicts, and a headless Obsidian container that crashed every 48 hours.

Then I spent an hour with Claude Code and got a 600-line Python script that does the same thing, but actually works.

The cognitive architecture principles haven't changed. We still can't hold more than 4-7 things in working memory. We still need systems that classify, surface, and nudge. The patterns are timeless.

But the implementation? Match the tool to the problem. If you're a developer, consider whether the "no-code" solution is adding complexity you'll have to maintain. Sometimes the simplest path is just... writing code.

---

*The source code is [available on GitHub](https://github.com/RADobson/ultrathink_2b).*
