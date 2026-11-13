# Dobson Development

The website for Dobson Development Pty Ltd, the Australian AI automation and business strategy agency. Tagline: Change your Outlook on IT.

Live at https://dobsondevelopment.com.au

## How it's built

- Jekyll on GitHub Pages. Pushing to `main` publishes the site.
- Static HTML and CSS, one small script for the days-since-outage count.
- Self-hosted font (Geist, SIL OFL).
- Formspree for the contact form and email signup.

## Where things live

| What | Where |
| --- | --- |
| Homepage (the three offers and the contact form live here) | `index.html` |
| Articles | `_posts/` (newest post becomes the lead story) |
| Outage ledger entries | `_data/outages.yml` (the days-since count uses the newest date) |
| Outage kit | `_includes/kit.html` |
| Header, footer, email signup | `_includes/header.html`, `_includes/footer.html`, `_includes/signup.html` |
| Styles | `assets/css/chrome.css` (header, footer, fonts), `assets/css/site.css` (everything else) |
| Free security tools | `tools/` (still published, no longer linked from the navigation) |

## Brand

The logo is the `dobson_dev_` wordmark with a cyan-to-violet cursor. Vector files are in `assets/brand/`. One typeface (Geist), black, white and silver, with the cursor as the only brand colour. Red appears only next to Microsoft.

## Logging a new outage

Copy the top block in `_data/outages.yml`, change the details, and put it first. The count on the homepage resets itself.

## Publishing a new article

Add a Markdown file to `_posts/` named `YYYY-MM-DD-title.md`. An optional `pull:` line in the front matter becomes the pull quote on the homepage.

Heads up: `.github/workflows/linkedin-auto-post.yml` posts to LinkedIn whenever a push to `main` adds a new file in `_posts/` in its final commit.

## Local preview

```bash
gem install jekyll jekyll-feed jekyll-sitemap jekyll-seo-tag minima
jekyll serve
```

## Retired pages

The site is one page plus the writing. `/claude/`, `/mac/`, `/proton/` and `/work-with-us/` redirect to their sections on the homepage, and the old service pages (`/services/...`, `/e8cr/`, `/soc-squad/`) redirect to the contact form. The originals are in the git history.
