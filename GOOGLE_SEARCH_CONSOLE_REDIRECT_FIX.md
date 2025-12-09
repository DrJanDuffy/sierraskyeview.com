# Google Search Console Redirect Issue Fix

## Problem
Google Search Console is showing "Page with redirect" validation errors for:
- `http://www.sierraskyeview.com/` (Nov 20, 2025)
- `https://sierraskyeview.com/` (Nov 15, 2025)
- `http://sierraskyeview.com/` (Nov 14, 2025)

## Root Cause
Google is detecting multiple URL variants and seeing redirects, which is causing validation failures. This is actually **normal behavior** - the site correctly redirects all variants to the canonical URL `https://www.sierraskyeview.com/`.

## Current Configuration

### Next.js Redirects (next.config.js)
- ✅ Non-www → www: `sierraskyeview.com` → `https://www.sierraskyeview.com`
- ✅ Permanent 301 redirects (SEO-friendly)

### Canonical URLs
- ✅ All pages have canonical tags pointing to `https://www.sierraskyeview.com`
- ✅ Sitemap uses `https://www.sierraskyeview.com` URLs
- ✅ Robots.txt references `https://www.sierraskyeview.com/sitemap.xml`

### Security Headers (Added)
- ✅ HSTS (Strict-Transport-Security) - Forces HTTPS
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy

## Solution Steps

### 1. Verify Redirects Are Working
Test these URLs - they should all redirect to `https://www.sierraskyeview.com/`:

```bash
# Test non-www HTTPS
curl -I https://sierraskyeview.com/

# Test non-www HTTP (should redirect to HTTPS www)
curl -I http://sierraskyeview.com/

# Test www HTTP (should redirect to HTTPS www)
curl -I http://www.sierraskyeview.com/

# Test www HTTPS (should be 200 OK)
curl -I https://www.sierraskyeview.com/
```

Expected results:
- All should redirect to `https://www.sierraskyeview.com/` with 301 status
- Final URL should return 200 OK

### 2. In Google Search Console

#### Step 1: Set Preferred Domain
1. Go to Google Search Console
2. Select your property (`www.sierraskyeview.com` or `sierraskyeview.com`)
3. Go to **Settings** → **Domain Settings**
4. If you have both properties, set the preferred domain to `www.sierraskyeview.com`

#### Step 2: Request Re-indexing
1. Go to **URL Inspection** tool
2. Enter: `https://www.sierraskyeview.com/`
3. Click **Request Indexing**
4. Wait for Google to recrawl

#### Step 3: Submit Updated Sitemap
1. Go to **Sitemaps**
2. Remove old sitemap if it exists
3. Add new sitemap: `https://www.sierraskyeview.com/sitemap.xml`
4. Submit

#### Step 4: Fix URL Issues (if needed)
1. Go to **Coverage** → **Excluded** or **Valid with warnings**
2. Look for redirect-related issues
3. For each URL showing as redirect:
   - Click on it
   - If it's redirecting to `https://www.sierraskyeview.com/`, this is **correct**
   - You can mark it as "Fixed" if it's redirecting to the canonical URL

### 3. Verify Vercel/Cloudflare Settings

#### Vercel (if using)
- ✅ Automatic HTTPS redirects should be enabled
- Check: Project Settings → Domains → Ensure `www.sierraskyeview.com` is primary

#### Cloudflare (if using)
- ✅ SSL/TLS mode should be "Full" or "Full (strict)"
- ✅ Always Use HTTPS should be enabled
- ✅ Automatic HTTPS Rewrites should be enabled

## Why This Happens

Google Search Console shows "Page with redirect" when:
1. Multiple URL variants exist (www/non-www, http/https)
2. Google detects redirects between them
3. This is **normal and expected** behavior

The validation "fails" because Google wants you to:
- Choose one canonical URL (✅ Done: `https://www.sierraskyeview.com`)
- Ensure all variants redirect to it (✅ Done)
- Set preferred domain in Search Console (⚠️ Do this)

## Expected Outcome

After following these steps:
- ✅ All URL variants redirect to `https://www.sierraskyeview.com`
- ✅ Google recognizes `https://www.sierraskyeview.com` as canonical
- ✅ Redirect warnings should clear after Google recrawls
- ✅ Indexing should improve with consistent URLs

## Timeline

- **Immediate**: Redirects are working correctly
- **1-2 weeks**: Google recrawls and updates Search Console
- **2-4 weeks**: Redirect warnings should clear from Search Console

## Notes

- The redirects are working correctly - this is a Search Console reporting issue
- All pages have proper canonical tags
- Sitemap uses correct canonical URLs
- The site is properly configured for SEO

