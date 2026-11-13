# Dobson Development

The website for Dobson Development Pty Ltd, the Australian AI automation and business strategy agency that specialises in NOT Microsoft.

Live at https://dobsondevelopment.com.au

## How it's built

- Jekyll on GitHub Pages. Pushing to `main` publishes the site.
- Static HTML and CSS, one small script for the homepage sign.
- Self-hosted fonts (Barlow Condensed, Source Serif 4, both SIL OFL).
- Formspree for the contact form and email signup.

## Where things live

| What | Where |
| --- | --- |
| Homepage | `index.html` |
| Articles | `_posts/` (newest post becomes the lead story) |
| Outage ledger entries | `_data/outages.yml` (the homepage sign counts from the newest date) |
| The swap list | `_data/swaps.yml` |
| Outage kit | `_includes/kit.html` |
| Services and contact | `way-out/index.html` |
| Header, footer | `_includes/header.html`, `_includes/footer.html` |
| Styles | `assets/css/chrome.css` (header, footer, fonts), `assets/css/site.css` (everything else) |
| Free security tools | `tools/` (these keep their original dark layout, `_layouts/tool.html`) |

## Logging a new outage

Copy the top block in `_data/outages.yml`, change the details, and put it first. The sign on the homepage resets itself.

## Publishing a new article

Add a Markdown file to `_posts/` named `YYYY-MM-DD-title.md`. An optional `pull:` line in the front matter becomes the pull quote on the homepage.

Heads up: `.github/workflows/linkedin-auto-post.yml` posts to LinkedIn whenever a push to `main` adds a new file in `_posts/` in its final commit.

## Local preview

```bash
gem install jekyll jekyll-feed jekyll-sitemap jekyll-seo-tag minima
jekyll serve
```

## Retired pages

The old service pages (`/services/...`, `/e8cr/`, `/soc-squad/`) now redirect to `/way-out/`. The originals are in the git history.
