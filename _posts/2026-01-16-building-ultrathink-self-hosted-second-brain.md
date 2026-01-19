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

I first heard of the "second brain" concept about 9 years ago on a Tim Ferriss podcast, while doing fasted treadmill walking at the gym early one morning, shortly before Donald Trump was inaugurated President for the first time.

<figure>
  <img src="{{ '/assets/images/Donald_Trump_chicken.jpg' | relative_url }}" alt="Donald_Trump_chicken.jpg">
  <figcaption>Donald_Trump_chicken.jpg</figcaption>
</figure>
<br><br>

I really TRIED to do it - with Evernote - back when that was a thing. But I could never make it work because I'm too scatter-brained. Getting on top of all the tagging and folder organisation and systematising was impossible for me to maintain for any length of time. So I gave up.

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

What followed was - predictably - me spending weeks overcomplicating everything until I finally had a "what am I DOING" moment.

## The Over-Engineered First Attempt

Look. I'm a developer. And developers have this disease where we can't just USE something - we have to BUILD it ourselves. So here's what I did:

- Swapped Slack for **Telegram** for capture. This was actually a good call - survived the cull and made it to prod. Broken clock, twice a day, etc.
- Swapped Zapier for **n8n** - self-hosted, open-source, free. Sounds perfect right? SPOILER: it was not perfect.
- Swapped Notion for **Obsidian** - but here's the thing - I needed it to run on a headless server. So I containerised the desktop app in Docker. The DESKTOP app. In a CONTAINER. I had to spoof it into thinking it had a UI. It was absolutely unhinged.
- **CouchDB** as the sync backend - because apparently I hated myself
- **LiveSync plugin** to bridge Obsidian with CouchDB - adding another layer of "what could possibly go wrong"
- **Caddy** as a reverse proxy with automatic HTTPS - okay this one was fine actually
- **Claude Sonnet 4.5** as the AI - the only sane decision in the whole stack

Four n8n workflow JSON files. Six Docker containers. A "Headless Ghost" architecture where Obsidian watched for filesystem changes and synced them to CouchDB so my iPad could see updates. I called it "elegant" at the time. Reader - it was not elegant.

It sort of worked. But it was was a nightmare to maintain. Obsidian's Docker container crashed every few hours like clockwork. The n8n workflows were visual spaghetti with no version control - every time something broke I was playing "find the misconfigured node" like some terrible escape room. LiveSync had edge cases, CouchDB had misconfigurations. It was a headache.

I was spending more time debugging the infrastructure than actually capturing thoughts. The irony of building a system to reduce cognitive load that was itself a massive cognitive load was not lost on me. But I pressed on. Because sunk cost fallacy is real.

## The Brainwave

It was 11pm. I was staring at yet ANOTHER CouchDB sync error. My third one that day. And I just... stopped.

*Wait. Why am I trying to fit this concept into some arbitrary 3rd tools? I literally installed Claude Code on my machine yesterday. Why am I fighting with visual node editors and headless desktop apps like some kind of masochist?*

I looked at my n8n workflows. Really looked at them. The actual logic - classify a message, write a file, send a confirmation back - was maybe 50 lines of Python if you squinted. But it was buried under layers of drag-and-drop nodes and JSON configs and webhook handlers and error catchers. The "headless Obsidian" monstrosity? It only existed because I needed something to run the LiveSync plugin. But wait - if I'm writing directly to the filesystem anyway... I don't NEED sync. The files are already there. On the server. Where I can just... read them.

<figure>
  <img src="{{ '/assets/images/VIM_wife_VIM_life.jpg' | relative_url }}" alt="VIM_wife_VIM_life.jpg">
  <figcaption>VIM_wife_VIM_life.jpg</figcaption>
</figure>
<br><br>

The whole Rube Goldberg machine I'd built was solving problems that only existed because of other parts of the machine.

I opened Claude Code. I typed: "Replace all of this with a single Python script."

And then magic happened.

## The Result: 600 Lines of Python

What Claude Code spat out - after about an hour of back-and-forth - was `ultrathink.py`. One file. 600 lines. Does EVERYTHING the six-container nightmare did:

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

ONE container instead of six. No n8n. No Obsidian. No CouchDB. No Caddy. Just... Python doing Python things.

I actually laughed when I saw it working. The whole script breaks down into five dead-simple components:

| Component | Purpose |
|-----------|---------|
| `VaultService` | Read/write markdown with YAML frontmatter |
| `ClaudeService` | Classify messages, extract fields, generate briefings |
| `StateManager` | Track pending clarifications in memory |
| `handle_message()` | Capture flow: classify → route → file or bounce |
| Scheduled jobs | Morning briefing (7 AM) and weekly review (Sunday 4 PM) |

That's it. That's the whole system. The same functionality as my six-container Frankenstein - but in a form I can actually read without wanting to cry.

## The Hot Take Section

Okay look - I'm not here to bash n8n. n8n is great. No-code tools are great. They're perfect for:
- Non-devs who need automation (obviously)
- Rapid prototyping when you don't know what you want yet
- Gluing together 15 different SaaS products

But here's my unpopular opinion: if your "no-code" solution involves:
- Running desktop apps headlessly in Docker (WHY did I do this)
- Multiple databases just for sync
- Workflow JSONs you can't meaningfully diff
- Debug sessions that take longer than just rewriting the logic in actual code

...maybe just write code? I know - shocking advice from a non-developer. But I genuinely think we've over-rotated on "no-code everything" as an industry.

Claude Code made this embarrassingly trivial. I described what I wanted. It wrote the script. I tested it. We went back and forth for an hour. The entire rewrite took less time than a typical n8n debugging session.

## The 8 Building Blocks (Nate Was Right About These)

Here's the thing - even though I completely rewrote the implementation, Nate's conceptual framework is still 100% solid. The WHAT didn't change. Only the HOW. Here's how my Python script implements each of his building blocks:

### 1. The Dropbox (Capture Point)
A private Telegram chat. Type or voice-note, hit send. Zero decisions at capture time. This is KEY - if you have to think "where does this go?" at capture time, you won't capture.

### 2. The Sorter (Classifier)
Claude receives the message and classifies it into one of four buckets:

| Category | What goes here |
|----------|----------------|
| **People** | Relationships, contacts, conversations |
| **Projects** | Active work with next actions |
| **Ideas** | Thoughts to explore later |
| **Admin** | Logistics, appointments, errands |

Four categories. That's it. I tried five at first - had a "Work" vs "Personal" split - and it was a disaster. Keep it simple.

### 3. The Form (Schema)
Each category has fields that Claude extracts - name, context, next_action, notes. YAML frontmatter makes it machine-readable. Nothing fancy here.

### 4. The Filing Cabinet (Storage)
Flat markdown files in folders. No database. No sync layer. Just. Files. This is the part that felt almost too simple - until I realised simple is exactly what I needed.

### 5. The Receipt (Audit Trail)
Every capture logs to `Inbox-Log.md` with timestamp, category, confidence, and status. I was skeptical about this one but it's saved me multiple times when debugging.

### 6. The Bouncer (Confidence Filter)
When Claude's confidence is below 60%, the bot asks "Which category?" instead of auto-filing. This is CRUCIAL - it prevents the junk drawer problem where everything just ends up in one pile.

### 7. The Tap on Shoulder (Proactive Surfacing)
This is the magic part - the system pings ME instead of me having to remember to check it:
- **Daily (7 AM)**: TOP 3 ACTIONS, STUCK ON, SMALL WIN
- **Weekly (Sunday 4 PM)**: WHAT HAPPENED, OPEN LOOPS, NEXT WEEK, THEME

### 8. The Fix Button (Correction Mechanism)
Reply to any filing with `fix: admin` to move it. One message, instant correction. Because AI gets it wrong sometimes - and that's fine as long as fixing it is trivial.

## The 12 Principles (These Are Actually Gold)

I'm just going to list these because they're too good to paraphrase. These are Nate's principles with my annotations:

1. **Reduce the human's job to one reliable behavior.** Capture only. Everything else is automation. ← This is the whole game. If I have to do TWO things I will do ZERO things.

2. **Separate memory from compute from interface.** Vault files, Python logic, Telegram UI. ← Learned this the hard way with my n8n spaghetti.

3. **Treat prompts like APIs.** Fixed input, fixed output, JSON schema. ← No vibes-based prompting. Structure or death.

4. **Always build a trust mechanism.** Logs, confidence scores, fix command. ← You WILL need to debug. Make it easy on future-you.

5. **Default to safe behavior when uncertain.** Ask, don't file. ← Better to annoy the user with a question than silently create chaos.

6. **Make output small, frequent, actionable.** 150 words max for dailies. ← I broke this rule at first. Wall-of-text briefings are useless.

7. **Use next action as the unit of execution.** Not "work on website" but "email Sarah by Friday." ← GTD 101 but it's true.

8. **Prefer routing over organizing.** Claude routes, users don't maintain. ← This is the epiphany from Nate's video. Let AI do the filing.

9. **Keep fields painfully small.** 3-5 fields max per category. ← I wanted 10 fields at first. Don't be me.

10. **Design for restart, not perfection.** Easy to resume after falling off. ← THIS. I've abandoned every productivity system because restarting felt impossible.

11. **Build one workflow, then attach modules.** Core loop first. ← Capture → classify → file → surface. Everything else is optional.

12. **Optimize for maintainability over cleverness.** One file beats six containers. ← The entire thesis of this post, really.

## The Stack (Laughably Simple)

Compare this to my original six-container monstrosity:

| Component | What it does |
|-----------|--------------|
| **Telegram** | Capture interface |
| **Python script** | Classification, filing, briefings |
| **Claude API** | The AI brain |
| **Flat files** | Storage |

That's it. Four components. Total cost: **$0/month** on Oracle Cloud Always Free tier. I'm not even paying for hosting.

## Getting Started (If You Want to Steal This)

If you want to run this yourself, it's stupidly easy:

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

Create your Telegram bot via `@BotFather`, get your chat ID from `@userinfobot`, and you're done. Seriously - that's the whole setup.

Test it:
```
You: Call Sarah about the Q3 budget by Friday
Bot: Filed as PROJECTS: 'Sarah Q3 Budget Call' (87%)
```

The commands are minimal because the whole point is you shouldn't have to remember commands:
- `/briefing` - trigger morning briefing manually
- `/review` - trigger weekly review manually
- `/status` - show vault note counts

## Full Circle

So here I am - 9 years after that Tim Ferriss podcast - a full 9-year numerology cycle later - and I've finally got a second brain system that actually works.

Not because the concept changed. The patterns are the same. We still can't hold more than 4-7 things in working memory. We still need systems that capture, classify, surface, and nudge.

That was true in 2017 and it's true now.

What changed is that AI got good enough to do the boring parts - the tagging, the organising, the "where does this go?" decision-making that I could never stick with manually.

And what I learned - the hard way, as usual - is that sometimes the "simple" no-code solution is actually the complicated one. I spent DAYS wrestling with n8n visual workflows, CouchDB sync conflicts, and a headless Obsidian container that crashed like clockwork. Then I spent an hour with Claude Code and got 600 lines of Python that just... works.

Maybe I should've just written the code from the start. But then I wouldn't have this blog post. And I wouldn't have learned to question my assumptions about what "easy" means.

Anyway - the system is working. I'm actually using it. Ask me again in 6 months whether I'm still using it - that's the real test.

---

*The source code is [available on GitHub](https://github.com/RADobson/ultrathink_2b). Steal it, modify it, make it yours.*
