# SEO & Performance Optimization Strategy
## Dobson Development — dobsondevelopment.com.au

*Last updated: February 2026*

---

## Table of Contents
1. [Core Web Vitals Optimizations](#1-core-web-vitals-optimizations)
2. [Structured Data Implementation](#2-structured-data-implementation)
3. [Mobile-First Design Improvements](#3-mobile-first-design-improvements)
4. [Technical SEO Checklist](#4-technical-seo-checklist)
5. [Content SEO Strategy](#5-content-seo-strategy)
6. [Monitoring & Measurement](#6-monitoring--measurement)
7. [Implementation Status](#7-implementation-status)

---

## 1. Core Web Vitals Optimizations

### 1.1 Largest Contentful Paint (LCP) — Target: <2.5s

| Optimization | Status | Impact |
|---|---|---|
| Font preloading with `rel="preload"` | ✅ Done | High — reduces font fetch latency |
| `font-display: swap` via Google Fonts URL param | ✅ Done | High — prevents FOIT |
| System font fallback stack until web fonts load | ✅ Done | High — instant text render |
| DNS prefetch for external domains | ✅ Done | Medium — reduces DNS lookup time |
| `rel="preconnect"` for Google Fonts | ✅ Done | Medium — early TLS handshake |
| Particle canvas deferred via `requestIdleCallback` | ✅ Done | High — unblocks main thread |
| Reduced font weight requests (400,600,700 only) | ✅ Done | Medium — smaller font payload |
| Internal link prefetching on hover | ✅ Done | Medium — faster navigation |

**Completed (Feb 2026):**
- [x] Self-host Google Fonts (eliminates third-party dependency) ✅ **DONE - LCP improved by 2.8s!**
- [x] Add `<link rel="preload">` for critical fonts ✅ **DONE**
- [x] Inline `@font-face` declarations ✅ **DONE**
- [x] Service worker for aggressive caching ✅ **DONE**

**Future improvements:**
- [ ] Extract critical CSS inline, defer the rest
- [ ] Implement HTTP/2 Server Push headers (if hosting supports)
- [ ] Generate WebP/AVIF versions of all images
- [ ] Add `fetchpriority="high"` to LCP element
- [ ] Font subsetting (reduce from 84KB to ~30KB)

### 1.2 Interaction to Next Paint (INP) — Target: <200ms

| Optimization | Status | Impact |
|---|---|---|
| Single `requestAnimationFrame`-throttled scroll handler | ✅ Done | High — eliminates jank |
| Passive event listeners on scroll/touch/wheel | ✅ Done | High — unblocks compositor |
| Reduced particle count (50 desktop, 25 mobile) | ✅ Done | High — less GPU/CPU work |
| Capped particle connection loop (max 12 neighbors) | ✅ Done | High — O(n) vs O(n²) |
| `visibilitychange` pauses canvas animation | ✅ Done | Medium — saves battery |
| Debounced window resize handler | ✅ Done | Medium — prevents layout thrash |
| Throttled mousemove handler (50ms) | ✅ Done | Medium — reduces event volume |

**Future improvements:**
- [ ] Move particle system to OffscreenCanvas + Web Worker
- [ ] Use `will-change: transform` only on actively animating elements
- [ ] Profile and eliminate any forced synchronous layouts
- [ ] Implement `content-visibility: auto` on below-fold sections

### 1.3 Cumulative Layout Shift (CLS) — Target: <0.1

| Optimization | Status | Impact |
|---|---|---|
| System font → web font swap (`.fonts-loaded` class) | ✅ Done | Critical — prevents text reflow |
| `font-display: swap` in CSS URL | ✅ Done | High — no invisible text |
| Fixed dimensions on card previews (`height: 200px`) | ✅ Existing | Medium |
| Scroll progress bar uses `width` not layout | ✅ Done | Low |
| No above-fold image without dimensions | ✅ Existing | Medium |

**Future improvements:**
- [ ] Add explicit `width` and `height` attributes to all `<img>` tags
- [ ] Use `aspect-ratio` CSS for responsive image containers
- [ ] Add `size-adjust` to font fallback for closer metric matching
- [ ] Audit and fix any dynamically injected content above fold

---

## 2. Structured Data Implementation

### 2.1 Current Schema Types

| Schema Type | Page | Status | Notes |
|---|---|---|---|
| `Organization` | Homepage | ✅ Enhanced | Full org details, founder, contact, sameAs |
| `WebSite` | Homepage | ✅ New | With `SearchAction` for site search |
| `SoftwareApplication` | Homepage | ✅ Fixed | Separate entities (was nested under `offers`) |
| `BreadcrumbList` | Homepage | ✅ New | Single-level for homepage |
| `BreadcrumbList` | Blog/Posts | ✅ Enhanced | Multi-level navigation chain |
| `BlogPosting` | Blog Posts | ✅ Enhanced | Added `wordCount`, `timeRequired`, `inLanguage` |
| `Blog` | Blog Index | ✅ Enhanced | Now includes `blogPost` array with all posts |
| `Person` | Blog Posts | ✅ Enhanced | Author with `sameAs` social links |
| `ItemList` | Homepage | ✅ New | Portfolio products listing |

### 2.2 Schema Validation

Test all structured data at:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### 2.3 Future Schema Opportunities

| Schema | When to Add | Expected Benefit |
|---|---|---|
| `FAQPage` | When FAQ section exists | FAQ rich snippets in SERP |
| `HowTo` | Tutorial blog posts | Step-by-step rich snippets |
| `Review` / `AggregateRating` | When reviews collected | Star ratings in SERP |
| `Event` | Webinar/launch announcements | Event rich snippets |
| `VideoObject` | YouTube embeds in posts | Video rich snippets |
| `Course` | CyberPuzzle course pages | Course rich snippets |

---

## 3. Mobile-First Design Improvements

### 3.1 Viewport & Layout

| Improvement | Status | Details |
|---|---|---|
| Dynamic viewport height (`100dvh`) | ✅ Done | Fixes iOS Safari address bar issue |
| `viewport-fit=cover` meta tag | ✅ Done | Handles notched devices |
| Safe area insets (`env()`) | ✅ Done | Prevents content under notch/home indicator |
| Small phone breakpoint (480px) | ✅ New | Better layout for 320-480px screens |
| Full-width hero buttons on mobile | ✅ Done | Easier to tap |

### 3.2 Touch & Interaction

| Improvement | Status | Details |
|---|---|---|
| 44px minimum tap targets | ✅ Done | All interactive elements |
| 48px tap targets for navigation | ✅ Done | Mobile nav overlay links |
| Touch device hover fix (`@media hover: none`) | ✅ Done | No sticky hover states |
| Passive event listeners | ✅ Done | Scroll, touch, wheel events |
| Mobile nav escape key handler | ✅ Existing | Keyboard accessibility |

### 3.3 Accessibility

| Improvement | Status | Details |
|---|---|---|
| `prefers-reduced-motion` support | ✅ Done | Disables all animations |
| `forced-colors` (high contrast) support | ✅ Done | Visible button borders |
| Skip-to-content link | ✅ Existing | Keyboard navigation |
| ARIA labels on all buttons/links | ✅ Existing | Screen reader support |
| `aria-expanded` on mobile menu | ✅ Existing | State communication |
| `lang="en-AU"` on html element | ✅ Done | Correct locale |
| Print stylesheet | ✅ New | Hides chrome, readable output |

### 3.4 Performance on Mobile

| Optimization | Status | Impact |
|---|---|---|
| Fewer particles on mobile (25 vs 50) | ✅ Done | Less GPU work |
| Reduced connection distances (70px vs 100px) | ✅ Done | Less CPU calculation |
| Skip mouse tracking on mobile | ✅ Done | No unnecessary events |
| Hide particles with `prefers-reduced-motion` | ✅ Done | Battery savings |
| Canvas pause on `visibilitychange` | ✅ Done | No work when backgrounded |

---

## 4. Technical SEO Checklist

### 4.1 Crawlability & Indexing

| Item | Status | Notes |
|---|---|---|
| `robots.txt` with crawler directives | ✅ Enhanced | Blocks AI training bots |
| Dynamic `sitemap.xml` (Jekyll-generated) | ✅ New | Auto-updates with new posts |
| Image sitemap support | ✅ New | `<image:image>` tags in sitemap |
| Canonical URLs on all pages | ✅ Done | Prevents duplicate content |
| `robots` meta tag with `max-image-preview:large` | ✅ Done | Allows rich image snippets |
| No orphan pages | ✅ Verified | All pages linked from nav |

### 4.2 Meta Tags

| Tag | Status | Coverage |
|---|---|---|
| `title` (unique per page) | ✅ Done | Homepage + blog + posts |
| `description` (unique per page) | ✅ Done | All pages |
| `canonical` | ✅ Done | All pages |
| `og:title`, `og:description`, `og:image` | ✅ Done | All pages |
| `og:image:alt` | ✅ New | Accessibility for social |
| `og:locale` (en_AU) | ✅ Done | Regional targeting |
| `twitter:card`, `twitter:site`, `twitter:creator` | ✅ Enhanced | Added @handle |
| `article:published_time` / `article:tag` | ✅ New | Blog posts only |
| `geo.region` / `geo.placename` | ✅ New | Local SEO |
| `theme-color` | ✅ New | Mobile browser chrome |

### 4.3 AI Bot Protection

The updated `robots.txt` blocks:
- `GPTBot` (OpenAI)
- `ChatGPT-User` (OpenAI)
- `CCBot` (Common Crawl for AI)
- `anthropic-ai` (Anthropic)
- `Google-Extended` (Google AI training)
- `FacebookBot` (Meta AI training)

This protects original blog content from being scraped for AI training while allowing full search engine indexing.

### 4.4 PWA / Web Manifest

| Feature | Status |
|---|---|
| `manifest.webmanifest` | ✅ Created |
| `theme-color` meta | ✅ Done |
| `apple-mobile-web-app` meta | ✅ Done |
| App icon definitions | ✅ In manifest (icons needed) |

**TODO:** Generate actual icon files:
- `/assets/images/icon-192.png` (192×192)
- `/assets/images/icon-512.png` (512×512)

---

## 5. Content SEO Strategy

### 5.1 Blog Post SEO Template

Every new blog post should include this front matter:

```yaml
---
layout: post
title: "Descriptive Title with Primary Keyword"
date: YYYY-MM-DD
last_modified_at: YYYY-MM-DD
tags: [tag1, tag2, tag3]
excerpt: "Compelling 150-160 char description with keywords"
description: "Longer meta description for search engines (up to 300 chars)"
image: /assets/images/post-specific-og-image.png
author: "Ernie Dobson"
---
```

### 5.2 Content Guidelines for SEO

1. **Title tags**: 50-60 characters, primary keyword first
2. **Meta descriptions**: 150-160 characters, include CTA
3. **H1**: One per page, includes primary keyword
4. **H2/H3**: Use for logical structure, include secondary keywords
5. **Image alt text**: Descriptive, includes keywords naturally
6. **Internal linking**: Link to other posts and homepage sections
7. **External linking**: Link to authoritative sources
8. **URL structure**: Short, descriptive slugs (`/blog/building-ultrathink/`)
9. **Content length**: 1,000+ words for pillar content
10. **Update cadence**: Refresh key posts quarterly with `last_modified_at`

### 5.3 Target Keywords

| Keyword Cluster | Priority | Pages |
|---|---|---|
| australian cybersecurity software | High | Homepage, About |
| brand protection tool / typosquatting detection | High | DoppelDown card |
| cybersecurity training platform | Medium | CyberPuzzle card |
| sunshine coast software developer | Medium | About section |
| saas development australia | Medium | Services section |
| security automation blog | Medium | Blog posts |
| ai-powered security tools | Medium | Services, Blog |
| indie hacker australia | Low | About, Blog |

### 5.4 Link Building Opportunities

1. Submit to Australian tech directories
2. Guest post on cybersecurity blogs
3. Share on Hacker News / Reddit /r/netsec
4. Engage in IndieHackers community
5. Answer questions on Stack Overflow / Security StackExchange
6. Register on Product Hunt for DoppelDown/CyberPuzzle
7. Australian startup directories (StartupAUS, etc.)

---

## 6. Monitoring & Measurement

### 6.1 Tools to Set Up

| Tool | Purpose | Status |
|---|---|---|
| Google Search Console | Index coverage, search performance | ⬜ Set up |
| Google Analytics 4 | Traffic analytics | ⬜ Add GA4 tag |
| PageSpeed Insights | Core Web Vitals monitoring | ⬜ Run baseline |
| Ahrefs / Semrush (free tier) | Keyword tracking | ⬜ Set up |
| Google Rich Results Test | Validate structured data | ⬜ Test each page |

### 6.2 Key Metrics to Track

| Metric | Target | Frequency |
|---|---|---|
| LCP | <2.5s | Weekly |
| INP | <200ms | Weekly |
| CLS | <0.1 | Weekly |
| Organic traffic | Growing MoM | Monthly |
| Indexed pages | All published pages | Monthly |
| Click-through rate | >3% average | Monthly |
| Rich results | Schema validated | Per deploy |

### 6.3 Automated Monitoring

Add to CI/CD pipeline:
```bash
# Lighthouse CI
npx @lhci/cli autorun --config=lighthouserc.json

# Schema validation
npx schema-dts-validator ./index.html
```

---

## 7. Implementation Status

### Completed in This Sprint ✅

1. **Core Web Vitals**
   - Font preloading + system font fallback (CLS fix)
   - `requestAnimationFrame`-throttled scroll handler (INP fix)  
   - Particle system optimization: deferred init, reduced count, paused when hidden
   - Passive event listeners on all scroll/touch events
   - `prefers-reduced-motion` full support
   - Debounced resize handlers
   - Internal link prefetching on hover

2. **Structured Data**
   - Enhanced `Organization` schema with full details
   - New `WebSite` schema with SearchAction
   - Fixed `SoftwareApplication` schemas (separate entities)
   - New `BreadcrumbList` on all pages
   - Enhanced `BlogPosting` with wordCount/timeRequired
   - Enhanced `Blog` index with blogPost array
   - New `ItemList` for portfolio
   - Article meta tags for blog posts

3. **Mobile-First Design**
   - Dynamic viewport height (`100dvh`)
   - Safe area insets for notched devices
   - 44px minimum tap targets
   - Small phone breakpoint (480px)
   - Touch device hover fix
   - High contrast mode support
   - Print stylesheet

4. **Technical SEO**
   - Enhanced `robots.txt` blocking AI training bots
   - Dynamic sitemap with image support
   - `lang="en-AU"` locale
   - Geo-targeting meta tags
   - PWA web manifest
   - Enhanced Open Graph & Twitter Card tags
   - Blog post SEO front matter template

### Completed in February 2026 Update ✅

1. **`content-visibility: auto`** added to below-fold sections (homepage + blog)
2. **Enhanced focus states** for keyboard accessibility (`:focus-visible`)
3. **PWA icons** created (SVG format for scalability)
4. **OG image template** created (SVG)
5. **Sitemap link** added to `<head>` on all pages
6. **Blog index structured data** added (Blog + BreadcrumbList schemas)
7. **robots.txt updated** with more AI crawler blocks (Perplexity, ByteDance, Cohere, Meta)
8. **Manifest shortcuts** added for Portfolio, Blog, Contact

### Performance Sprint ✅ (Feb 5, 2026)

**Achieved 98% Lighthouse Performance Score (up from 69%)**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| LCP | 4.6s | **1.8s** | 61% faster |
| FCP | 3.3s | **1.2s** | 64% faster |
| Speed Index | 8.7s | **4.1s** | 53% faster |

**Optimizations completed:**
- ✅ **Self-hosted fonts** — Inter + Fira Code woff2 (eliminates Google Fonts)
- ✅ **Font preloading** — `<link rel="preload">` for critical fonts
- ✅ **Inline @font-face** — No render-blocking CSS requests
- ✅ **Service worker** — Aggressive caching (cache-first for fonts)
- ✅ **LCP optimization** — Removed reveal animations from hero elements

### Next Steps 🔜

1. **Set up Google Search Console** and submit sitemap
2. **Generate PNG PWA icons** (192px and 512px) for broader compatibility
3. **Create unique OG images** for each blog post
4. **Font subsetting** — reduce font files from 84KB to ~30KB
5. **Move particles to Web Worker** with OffscreenCanvas
6. **Set up Lighthouse CI** in GitHub Actions
7. **Convert images to WebP/AVIF** with `<picture>` fallbacks
8. **Add Google Analytics 4** (when ready)
9. **Implement FAQ schema** when FAQ section is added

---

*This document should be reviewed and updated with each significant site change.*

*Last performance audit: February 5, 2026 — 98% score*
