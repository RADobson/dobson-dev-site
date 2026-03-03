# Website Analytics Setup (Privacy-First)

This site now captures **lead attribution** directly in contact form submissions (UTM + first touch + initial referrer).

## ✅ Already Implemented

In `index.html`:
- Hidden fields added to the contact form:
  - `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
  - `first_page`, `initial_referrer`
- JS logic added to:
  - Read UTM values from URL params
  - Persist first-touch attribution in `localStorage`
  - Populate hidden form fields before submit

That means every Formspree lead can now be traced back to campaign/source without extra tools.

---

## Optional Layer 1: Cloudflare Web Analytics (Free)

Best when you want simple visitor/pageview metrics with no cookie banner complexity.

1. In Cloudflare dashboard, enable **Web Analytics** for `dobsondevelopment.com.au`
2. Copy your beacon token
3. Add this before `</head>`:

```html
<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"YOUR_TOKEN_HERE"}'></script>
```

4. Deploy and verify pageviews in Cloudflare dashboard.

---

## Optional Layer 2: Plausible (Paid, stronger goals/events)

Best when you want funnel visibility and campaign reports.

1. Create site in Plausible for `dobsondevelopment.com.au`
2. Add script before `</head>`:

```html
<script defer data-domain="dobsondevelopment.com.au" src="https://plausible.io/js/script.js"></script>
```

3. Add custom events for conversions (optional):
   - Contact submit
   - Clicks on `E8CR SQUAD`
   - Clicks to GitHub

---

## Recommended KPI Dashboard (Weekly)

Track these each week:
- Unique visitors
- Contact submissions
- Submission conversion rate (`submissions / uniques`)
- Top channels (`utm_source`, `utm_campaign`)
- Top landing pages (`first_page`)

If conversion rate is below ~1.5%, iterate hero copy + CTA.
If conversion rate is above ~3%, scale distribution on best `utm_source`.
