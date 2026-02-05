/**
 * Service Worker for Dobson Development
 * Aggressive caching for fonts, images, and static assets
 * Version: 2.0.0
 */

const CACHE_VERSION = 'dobson-v2';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

// Critical assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/assets/fonts/inter-latin.woff2',
  '/assets/fonts/firacode-latin.woff2',
  '/assets/images/icon.svg',
  '/manifest.webmanifest'
];

// Cache-first resources (fonts, images)
const CACHE_FIRST_PATTERNS = [
  /\/assets\/fonts\//,
  /\/assets\/images\//,
  /\.woff2$/,
  /\.png$/,
  /\.jpg$/,
  /\.svg$/
];

// Network-first resources (HTML, API)
const NETWORK_FIRST_PATTERNS = [
  /\/$/,
  /\.html$/,
  /\/blog\//
];

// Install: precache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Precaching critical assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name.startsWith('dobson-') && name !== STATIC_CACHE && name !== RUNTIME_CACHE)
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch: smart caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip cross-origin requests (except fonts we control)
  if (url.origin !== self.location.origin) return;
  
  // Cache-first for static assets
  if (CACHE_FIRST_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(cacheFirst(request));
    return;
  }
  
  // Network-first for HTML (with cache fallback)
  if (NETWORK_FIRST_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(networkFirst(request));
    return;
  }
  
  // Stale-while-revalidate for everything else
  event.respondWith(staleWhileRevalidate(request));
});

// Cache-first strategy: fast for static assets
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('[SW] Cache-first fetch failed:', error);
    throw error;
  }
}

// Network-first strategy: fresh content with cache fallback
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Network failed, falling back to cache');
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

// Stale-while-revalidate: instant response, background update
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);
  
  return cached || fetchPromise;
}

// Handle messages from main thread
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
