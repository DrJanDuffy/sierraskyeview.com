# Cloudflare Transformations Setup for Sitemap.xml

## Overview

This guide helps configure Cloudflare to properly handle sitemap.xml and robots.txt redirects, ensuring Google Search Console can access them correctly.

## Current Issue

- Google Search Console is trying to access `https://sierraskyeview.com/sitemap.xml`
- The site redirects to `https://www.sierraskyeview.com/sitemap.xml` with 307 status
- Google may not follow 307 redirects for sitemaps
- Need 301 permanent redirects for better SEO

## Solution Options

### Option 1: Cloudflare Transform Rules (Recommended)

#### Step 1: Get Cloudflare API Token

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click "Create Token"
3. Use "Custom token" template
4. Set permissions:
   - Zone: Zone Settings:Read, Zone:Zone:Read
   - Zone Resources: Include All zones (or specific zone)
5. Copy the token

#### Step 2: Set Environment Variable

```bash
export CLOUDFLARE_API_TOKEN="your_token_here"
```

#### Step 3: Run Configuration Script

```bash
node configure-cloudflare.js
```

### Option 2: Manual Cloudflare Dashboard Configuration

#### Step 1: Access Transform Rules

1. Go to Cloudflare Dashboard
2. Select your domain (sierraskyeview.com)
3. Navigate to "Rules" → "Transform Rules"

#### Step 2: Create URL Rewrite Rule

1. Click "Create rule"
2. Name: "Sitemap Redirect"
3. When incoming requests match:
   - Field: Hostname
   - Operator: equals
   - Value: sierraskyeview.com
   - AND
   - Field: URI Path
   - Operator: equals
   - Value: /sitemap.xml

4. Then:
   - Action: Rewrite to
   - Type: Dynamic
   - Expression: `"https://www.sierraskyeview.com/sitemap.xml"`
   - Status code: 301

#### Step 3: Create Robots.txt Rule

1. Click "Create rule"
2. Name: "Robots.txt Redirect"
3. When incoming requests match:
   - Field: Hostname
   - Operator: equals
   - Value: sierraskyeview.com
   - AND
   - Field: URI Path
   - Operator: equals
   - Value: /robots.txt

4. Then:
   - Action: Rewrite to
   - Type: Dynamic
   - Expression: `"https://www.sierraskyeview.com/robots.txt"`
   - Status code: 301

#### Step 4: Create General Redirect Rule

1. Click "Create rule"
2. Name: "Non-www to www Redirect"
3. When incoming requests match:
   - Field: Hostname
   - Operator: equals
   - Value: sierraskyeview.com

4. Then:
   - Action: Rewrite to
   - Type: Dynamic
   - Expression: `"https://www.sierraskyeview.com" + http.request.uri.path + http.request.uri.query`
   - Status code: 301

### Option 3: Page Rules (Alternative)

#### Step 1: Create Page Rule

1. Go to "Rules" → "Page Rules"
2. Click "Create Page Rule"
3. URL pattern: `sierraskyeview.com/sitemap.xml`
4. Settings:
   - Forwarding URL: 301 Permanent Redirect
   - Destination URL: `https://www.sierraskyeview.com/sitemap.xml`

#### Step 2: Create Additional Rules

Repeat for:
- `sierraskyeview.com/robots.txt` → `https://www.sierraskyeview.com/robots.txt`
- `sierraskyeview.com/*` → `https://www.sierraskyeview.com/$1`

## Verification Steps

### Step 1: Test Redirects

```bash
# Test sitemap redirect
curl -I https://sierraskyeview.com/sitemap.xml

# Test robots.txt redirect
curl -I https://sierraskyeview.com/robots.txt

# Test general redirect
curl -I https://sierraskyeview.com/
```

Expected results:
- Status: 301 Moved Permanently
- Location: https://www.sierraskyeview.com/...

### Step 2: Verify Sitemap Content

```bash
# Test www sitemap
curl https://www.sierraskyeview.com/sitemap.xml

# Test www robots.txt
curl https://www.sierraskyeview.com/robots.txt
```

Expected results:
- Status: 200 OK
- Content-Type: text/xml (sitemap) or text/plain (robots.txt)
- Valid XML content

### Step 3: Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Navigate to "Sitemaps"
3. Remove old sitemap entry if exists
4. Add new sitemap: `https://sierraskyeview.com/sitemap.xml`
5. Click "Submit"

## Expected Timeline

### Immediate (0-10 minutes)
- Cloudflare rules take effect
- Redirects return 301 status
- Sitemap accessible via redirect

### Short-term (24-48 hours)
- Google re-crawls sitemap
- Search Console updates status
- "Discovered pages: 16"
- No more "General HTTP error"

### Medium-term (1-2 weeks)
- Full indexing of all pages
- Improved search visibility
- Better SEO performance

## Troubleshooting

### Issue: Still getting 307 redirects
**Solution:** Check Cloudflare rule order and priority

### Issue: Redirects not working
**Solution:** Verify rule conditions and actions

### Issue: Google still can't access sitemap
**Solution:** Wait 24-48 hours for propagation

### Issue: Sitemap content not loading
**Solution:** Check Next.js deployment and sitemap route

## API Reference

### Get Current Transformations
```bash
curl -X GET "https://api.cloudflare.com/client/v4/zones/6da0cfdcbf41ec231cc5e2d3cd0ed160/settings/transformations" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json"
```

### Update Transformations Settings
```bash
curl -X PATCH "https://api.cloudflare.com/client/v4/zones/6da0cfdcbf41ec231cc5e2d3cd0ed160/settings/transformations" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "enable_transform_rules": true,
    "enable_managed_transforms": true
  }'
```

### Create Transform Rule
```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/6da0cfdcbf41ec231cc5e2d3cd0ed160/rules/transform" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "expression": "http.host eq \"sierraskyeview.com\" and http.request.uri.path eq \"/sitemap.xml\"",
    "actions": [
      {
        "type": "set_status",
        "status": 301
      },
      {
        "type": "set_dynamic",
        "expression": "\"https://www.sierraskyeview.com/sitemap.xml\""
      }
    ],
    "enabled": true,
    "description": "Redirect sitemap.xml from non-www to www"
  }'
```

## Contact Information

For technical support:
- **Website:** https://sierraskyeview.com
- **Email:** DrJanSells@SierraSkyeview.com
- **Phone:** (702) 500-1955

---

*This configuration will ensure proper sitemap handling for Google Search Console.*
