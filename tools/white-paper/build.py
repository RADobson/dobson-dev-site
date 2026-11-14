#!/usr/bin/env python3
"""Builds /white-paper/index.html from paper.md (the white paper exported as markdown).

Usage, from the repo root:
    python3 tools/white-paper/build.py      # writes white-paper/index.html
    python3 -m http.server 8765 &           # serve the site locally
    python3 tools/white-paper/pdf.py        # prints the page to white-paper/change-your-outlook-on-it.pdf

Needs the `markdown` package; pdf.py needs `playwright` and Chrome.
"""
import re, html, sys, json, os
import markdown

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))

SRC = os.path.join(HERE, 'paper.md')
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'white-paper', 'index.html')
OUTLOOK_D = open(os.path.join(HERE, 'outlook-path.txt')).read().strip()
OUTLOOK = ('<span class="outlook"><svg viewBox="0 -1491 7311 1922" aria-hidden="true" focusable="false">'
           f'<path d="{OUTLOOK_D}"/></svg><span class="sr">Outlook</span></span>')
WM = 'dobson_dev<span class="cursor" aria-hidden="true"></span>'
EMAIL = 'richard@dobsondevelopment.com.au'
PDF = '/white-paper/change-your-outlook-on-it.pdf'
URL = 'https://dobsondevelopment.com.au/white-paper/'
TITLE = 'Change your Outlook on IT: the case for a Microsoft-free Australian business'
DESC = ('A free white paper for Australian business owners: Microsoft\'s record on outages, price and security, '
        'the 2026 privacy and ASD Essentials changes, and the Apple, Proton and Claude workplace that replaces it.')

lines = open(SRC).read().split('\n')

# ---------- pull the lead paragraph out of the top matter ----------
first_h2 = next(i for i, l in enumerate(lines) if l.startswith('## '))
top = [l for l in lines[:first_h2] if l.strip()]
lead = top[-1]
assert lead.startswith('The case for'), lead[:60]
lines = lines[first_h2:]

# ---------- graphics as HTML ----------
STATS = [('24 hours', 'Outlook and Teams down across Australia', '13 November 2026'),
         ('74', 'countries hit by the same outage', 'Downdetector, via ABC News'),
         ('16.7%', 'rise in Microsoft 365 Business Basic', '1 July 2026'),
         ('22%', 'of federal agencies at Essential Eight Level 2', 'ASD, 2025 posture report'),
         ('$55,400', 'average cost of a cybercrime report, small business', 'ASD, 2025-26'),
         ('A$245', 'per person per month, everything included', 'Dobson Development')]
stats_html = '<div class="fig stats" role="list">' + ''.join(
    f'<div class="stat" role="listitem"><b>{a}</b><span>{b}</span><small>{c}</small></div>' for a, b, c in STATS) + '</div>'

OUTAGES = [('13 Nov 2026', 'Outlook, Teams, SharePoint, Copilot', 24),
           ('31 Aug to 3 Sep 2026', 'Outlook, Teams, SharePoint, OneDrive', 77),
           ('22 Jan 2026', 'Outlook, Defender, Purview', 10),
           ('29 Oct 2025', 'Azure, Microsoft 365, Xbox', 12)]
chart_html = ('<figure class="fig panel chart"><figcaption><b>Hours to recover</b>'
              '<span>Major Microsoft cloud outages, October 2025 to November 2026</span></figcaption><div class="rows">'
              + ''.join(f'<div class="row"><div class="lab"><b>{d}</b><span>{w}</span></div>'
                        f'<div class="track"><i style="width:{h / 77 * 84:.1f}%"></i><em>{h} hours</em></div></div>'
                        for d, w, h in OUTAGES)
              + '</div><p class="src">Sources: ABC News, IsDown, The Register, Breached Company. Durations are approximate.</p></figure>')

SIX = [('Apple', 'Mac, iPhone, iPad', 'replaces Windows PCs'), ('Okta', 'Sign-in and staff accounts', 'replaces Entra ID'),
       ('Proton', 'Mail, files, meetings, passwords, VPN', 'replaces Outlook and OneDrive'), ('Claude', 'AI assistant', 'replaces Copilot'),
       ('Slack', 'Team chat', 'replaces Teams'), ('Salesforce', 'Customer records', 'replaces Dynamics 365')]
stack_html = ('<figure class="fig panel stack"><figcaption><b>One workplace, six specialists</b>'
              '<span>Each job goes to the company that does it best. We join them up and look after the lot.</span></figcaption>'
              '<div class="people">Your people, on a Mac, signed in with one fingerprint</div><div class="six">'
              + ''.join(f'<div class="sx"><b>{n}</b><span>{j}</span><small>{r}</small></div>' for n, j, r in SIX)
              + f'</div><div class="base"><span class="wm">{WM}</span>'
              '<span>Set-up with Addigy · updates · threat monitoring · help desk</span></div></figure>')

STAGES = [('Before you commit', 'Free review', ['Apps, folders, mailboxes listed', 'Windows-only software flagged', 'A written plan']),
          ('Days 1 to 30', 'Foundation and move', ['Apple Business and Okta set up', 'Macs shipped to staff', 'Email switched on a Friday night']),
          ('Days 31 to 60', 'Settling in', ['Slack goes live', 'Passwords into Proton Pass', 'Files tidied, Claude session']),
          ('Days 61 to 90', 'Proof and close', ['First evidence pack', 'Microsoft licences cancelled', 'Old PCs wiped and recycled'])]
road_html = ('<figure class="fig panel road"><figcaption><b>The first 90 days</b></figcaption><ol class="stages">'
             + ''.join(f'<li><small>{w}</small><b>{n}</b><ul>' + ''.join(f'<li>{i}</li>' for i in its) + '</ul></li>'
                       for w, n, its in STAGES) + '</ol></figure>')

quote_html = ('<figure class="fig quote"><blockquote>You can claw my Claude Max subscription from my cold dead hands.</blockquote>'
              '<figcaption>A customer, replying to a Copilot sales pitch</figcaption></figure>')

PARTS = {'Part one': ('01', "Microsoft's record", 'Outages, price rises, layoffs and security failures'),
         'Part two': ('02', 'The rules have changed', 'ASD Essentials and the Privacy Act for small business'),
         'Part three': ('03', 'The stack', 'Apple, Proton and Claude, with Slack, Salesforce and Okta'),
         'Part four': ('04', 'Working with us', 'The service, the first 90 days and the price')}


def part_html(label):
    num, title, sub = PARTS[label]
    return (f'<section class="part dark" aria-label="{label}: {html.escape(title)}"><span class="pn" aria-hidden="true">{num}</span>'
            f'<p class="pl">{label}</p><p class="pt">{html.escape(title)}</p><p class="ps">{sub}</p></section>')


CLAUDE_PARAS = [
    'Richard asked me to write one section in my own voice, so here it is.',
]
tokens = {}


def tok(name, value):
    tokens[name] = value
    return f'@@{name}@@'


out = []
i = 0
in_next = False
while i < len(lines):
    l = lines[i]
    m = re.match(r'&#91;image: (.*)\\\]$', l)
    if m:
        alt = m.group(1)
        if alt.startswith('Six figures'):
            out.append(tok('STATS', stats_html))
        elif alt.startswith('Part '):
            label = alt.split(':')[0]
            out.append(tok('PART' + PARTS[label][0], part_html(label)))
        elif alt.startswith('Bar chart'):
            out.append(tok('CHART', chart_html))
        elif alt.startswith('Diagram of the stack'):
            out.append(tok('STACK', stack_html))
        elif alt.startswith('Quote from a customer'):
            out.append(tok('QUOTE', quote_html))
        elif alt.startswith('Timeline'):
            out.append(tok('ROAD', road_html))
        elif alt in ('Apple', 'Addigy', 'Proton', 'Claude', 'Slack', 'Salesforce', 'Okta') or alt.startswith('Change your Outlook'):
            pass  # the heading carries the supplier name; the closing banner becomes the call to action
        else:
            raise SystemExit('unmapped image: ' + alt)
        i += 1
        continue
    if l.startswith('| Richard asked me to write one section'):
        cell = l.strip('| ').strip()
        cuts = ['so here it is. ', "his company's. ", 'find it useful. ', 'that approach. ']
        paras, rest = [], cell
        for c in cuts:
            a, rest = rest.split(c, 1)
            paras.append(a + c.strip())
        paras.append(rest)
        assert len(paras) == 5
        out.append(tok('CLAUDE', '<aside class="claude"><p class="who">Claude</p>'
                       + ''.join(f'<p>{html.escape(p, quote=False)}</p>' for p in paras) + '</aside>'))
        i += 2  # skip the table rule line
        continue
    if l.strip() == 'Change your Outlook on IT.':
        i += 1
        continue
    out.append(l)
    i += 1

md = '\n'.join(out)
body = markdown.markdown(md, extensions=['tables', 'toc', 'sane_lists', 'smarty'],
                         extension_configs={'smarty': {'smart_dashes': False, 'smart_ellipses': False}})
for k, v in tokens.items():
    assert f'<p>@@{k}@@</p>' in body, k
    body = body.replace(f'<p>@@{k}@@</p>', v)

# ---------- post-process ----------
body = body.replace('<table>', '<div class="tbl"><table>').replace('</table>', '</table></div>')
body = re.sub(r'<a href="(https?://)', r'<a rel="noopener" href="\1', body)

SUPPLIERS = 'Apple|Addigy|Proton|Claude|Slack|Salesforce|Okta'
body = re.sub(rf'<h2 id="([^"]+)">({SUPPLIERS}): ([^<]+)</h2>',
              lambda m: (f'<h2 id="{m.group(1)}" class="sup"><span class="sup-name">{m.group(2)}</span>'
                         f'<span class="sr">: </span><span class="sup-rest">{m.group(3)}</span></h2>'), body)

# the next-step call to action
nxt = re.search(r'(<h2 id="next-step">Next step</h2>)(.*?)(<p>Dobson Development Pty Ltd, ABN)', body, re.S)
assert nxt
coffee = re.search(r'<p>The first conversation.*?</p>', nxt.group(2), re.S).group(0)
cta = (f'<div class="next"><p class="next-h">Change your {OUTLOOK} on IT.</p>{coffee}'
       f'<p class="next-a"><a class="btn" href="mailto:{EMAIL}?subject=Coffee">Book a coffee</a>'
       f'<a class="btn ghost screen-only" href="{PDF}" download>Download the PDF</a></p>'
       f'<p class="next-m">Email <a href="mailto:{EMAIL}?subject=Coffee">{EMAIL}</a> or visit '
       f'<a href="https://dobsondevelopment.com.au">dobsondevelopment.com.au</a>.</p></div>')
body = body[:nxt.start(2)] + cta + '<p class="legal">Dobson Development Pty Ltd, ABN' + body[nxt.end(3):]

# sources: sub-labels and compact lists
si = body.index('<h2 id="sources">')
src = re.sub(r'<p>([^<]{3,70})</p>\s*<ul>', r'<p class="srchead">\1</p>\n<ul>', body[si:])
body = body[:si] + '<div class="sources">' + src + '</div>'

# ---------- contents ----------
toc = []
for m in re.finditer(r'<section class="part dark" aria-label="(Part \w+): ([^"]+)"|<h2 id="([^"]+)"[^>]*>(.*?)</h2>', body):
    if m.group(1):
        toc.append(('part', m.group(1), html.unescape(m.group(2))))
    else:
        text = re.sub(r'<[^>]+>', '', m.group(4))
        toc.append(('h2', m.group(3), html.unescape(text)))


def toc_list():
    s = '<ol>'
    for kind, a, b in toc:
        if kind == 'part':
            s += f'<li class="tp"><span>{a}</span> {html.escape(b)}</li>'
        else:
            s += f'<li><a href="#{a}">{html.escape(b)}</a></li>'
    return s + '</ol>'


words = len(re.sub(r'<[^>]+>', ' ', body).split())
mins = round(words / 230 / 5) * 5

CSS = open(os.path.join(HERE, 'page.css')).read()
JS = open(os.path.join(HERE, 'page.js')).read()
ld = {"@context": "https://schema.org", "@type": "Article", "headline": TITLE, "description": DESC,
      "datePublished": "2026-11-14", "dateModified": "2026-11-14", "inLanguage": "en-AU",
      "mainEntityOfPage": URL, "image": "https://dobsondevelopment.com.au/white-paper/og.jpg",
      "author": {"@type": "Person", "name": "Richard Dobson"},
      "publisher": {"@type": "Organization", "name": "Dobson Development Pty Ltd", "url": "https://dobsondevelopment.com.au/"}}

page = f'''<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>{TITLE} | Dobson Development</title>
<meta name="description" content="{html.escape(DESC)}">
<link rel="canonical" href="{URL}">
<meta property="og:type" content="article">
<meta property="og:url" content="{URL}">
<meta property="og:title" content="Change your Outlook on IT. The case for a Microsoft-free Australian business.">
<meta property="og:description" content="{html.escape(DESC)}">
<meta property="og:image" content="https://dobsondevelopment.com.au/white-paper/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#000000">
<link rel="icon" type="image/svg+xml" href="/assets/images/icon.svg">
<link rel="icon" type="image/png" sizes="192x192" href="/assets/images/icon-192.png">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/geist-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="alternate" type="application/pdf" href="{PDF}" title="Change your Outlook on IT (PDF)">
<script type="application/ld+json">{json.dumps(ld)}</script>
<style>
{CSS}
</style>
</head>
<body>
<div class="bar">
    <div class="wrap bar-in">
        <a class="wordmark" href="/" aria-label="Dobson Development, home">{WM}</a>
        <nav class="bar-nav" aria-label="White paper">
            <a class="pdf" href="{PDF}" download>Download PDF</a>
            <a class="btn small" href="mailto:{EMAIL}?subject=Coffee">Book a coffee</a>
        </nav>
    </div>
    <div class="progress" aria-hidden="true"><i id="progress"></i></div>
</div>

<header class="hero">
    <div class="light" aria-hidden="true"></div>
    <div class="wrap">
        <p class="eyebrow">White paper · November 2026</p>
        <h1>Change your {OUTLOOK} on IT.</h1>
        <p class="second">The case for a Microsoft-free Australian business.</p>
        <p class="lead">Meet the Apple, Proton and Claude workplace that Dobson Development sets up and manages for you.</p>
        <p class="meta">By Richard Dobson · 14 November 2026 · {mins} minute read</p>
        <p class="hero-a"><a class="btn" href="#executive-summary">Start reading</a><a class="btn ghost" href="{PDF}" download>Download the PDF</a></p>
        <img class="hero-img" src="/white-paper/hero.jpg" width="1800" height="1012" alt="A MacBook lit in violet and blue light" fetchpriority="high">
    </div>
</header>

<section class="pdf-cover dark pdf-only" aria-hidden="true">
    <img src="/white-paper/cover-portrait.jpg" alt="">
    <div class="pc-in">
        <span class="wordmark">{WM}</span>
        <div class="pc-b">
            <p class="eyebrow">White paper · November 2026</p>
            <p class="pc-h">Change your<br>{OUTLOOK} on IT.</p>
            <p class="pc-s">The case for a Microsoft-free Australian business</p>
            <p class="pc-m">Richard Dobson · Dobson Development Pty Ltd · dobsondevelopment.com.au</p>
        </div>
    </div>
</section>

<nav class="pdf-toc pdf-only" aria-hidden="true">
    <p class="lead-print">{html.escape(lead, quote=False)}</p>
    <p class="pt-h">Contents</p>
    {toc_list()}
</nav>

<div class="wrap layout">
    <nav class="toc" aria-label="Contents">
        <p class="toc-h">Contents</p>
        {toc_list()}
    </nav>
    <main>
        <details class="mtoc">
            <summary>Contents</summary>
            {toc_list()}
        </details>
        <article>
{body}
        </article>
    </main>
</div>

<section class="close dark" id="contact">
    <div class="wrap">
        <span class="wordmark pdf-only">{WM}</span>
        <h2><span class="l">Change your</span> <span class="l">{OUTLOOK} on IT<i class="cursor" aria-hidden="true"></i></span></h2>
        <p>Thirty minutes over a coffee, and the coffee is on us. You leave with a one-page plan for your business on Apple, Proton and Claude.</p>
        <a class="mail" href="mailto:{EMAIL}?subject=Coffee">{EMAIL}</a>
        <p class="close-pdf screen-only"><a href="{PDF}" download>Download this paper as a PDF</a></p>
        <p class="close-site pdf-only">dobsondevelopment.com.au</p>
    </div>
</section>

<footer>
    <div class="wrap">
        <p>&copy; 2026 Dobson Development Pty Ltd. ABN 43 688 593 606. Queensland, Australia.</p>
        <p>This paper is general information. Please take legal advice about your own obligations. Apple, Mac, MacBook, Proton, Claude, Slack, Salesforce, Okta, Addigy and Microsoft are trademarks of their respective owners. Dobson Development is an independent business.</p>
    </div>
</footer>
<script>
{JS}
</script>
</body>
</html>
'''
os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, 'w').write(page)
print('wrote', OUT, len(page), 'bytes;', words, 'words;', mins, 'min;', len(toc), 'toc entries')
