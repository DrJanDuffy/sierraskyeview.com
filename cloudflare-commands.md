# Quick Cloudflare API Commands

## Zone ID: 6da0cfdcbf41ec231cc5e2d3cd0ed160
## Domain: sierraskyeview.com

## 1. Get Current Transformations Settings

```bash
curl -X GET "https://api.cloudflare.com/client/v4/zones/6da0cfdcbf41ec231cc5e2d3cd0ed160/settings/transformations" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json"
```

## 2. Enable Transformations

```bash
curl -X PATCH "https://api.cloudflare.com/client/v4/zones/6da0cfdcbf41ec231cc5e2d3cd0ed160/settings/transformations" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "enable_transform_rules": true,
    "enable_managed_transforms": true
  }'
```

## 3. Create Sitemap Redirect Rule

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

## 4. Create Robots.txt Redirect Rule

```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/6da0cfdcbf41ec231cc5e2d3cd0ed160/rules/transform" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "expression": "http.host eq \"sierraskyeview.com\" and http.request.uri.path eq \"/robots.txt\"",
    "actions": [
      {
        "type": "set_status",
        "status": 301
      },
      {
        "type": "set_dynamic",
        "expression": "\"https://www.sierraskyeview.com/robots.txt\""
      }
    ],
    "enabled": true,
    "description": "Redirect robots.txt from non-www to www"
  }'
```

## 5. Create General Non-www to www Redirect

```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/6da0cfdcbf41ec231cc5e2d3cd0ed160/rules/transform" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "expression": "http.host eq \"sierraskyeview.com\"",
    "actions": [
      {
        "type": "set_status",
        "status": 301
      },
      {
        "type": "set_dynamic",
        "expression": "\"https://www.sierraskyeview.com\" + http.request.uri.path + http.request.uri.query"
      }
    ],
    "enabled": true,
    "description": "Redirect all non-www traffic to www"
  }'
```

## 6. Test the Configuration

```bash
# Test sitemap redirect
curl -I https://sierraskyeview.com/sitemap.xml

# Test robots.txt redirect
curl -I https://sierraskyeview.com/robots.txt

# Test general redirect
curl -I https://sierraskyeview.com/

# Test www versions
curl -I https://www.sierraskyeview.com/sitemap.xml
curl -I https://www.sierraskyeview.com/robots.txt
```

## Expected Results

### Redirects (should return 301):
- `https://sierraskyeview.com/sitemap.xml` → `https://www.sierraskyeview.com/sitemap.xml`
- `https://sierraskyeview.com/robots.txt` → `https://www.sierraskyeview.com/robots.txt`
- `https://sierraskyeview.com/` → `https://www.sierraskyeview.com/`

### Direct Access (should return 200):
- `https://www.sierraskyeview.com/sitemap.xml` → 200 OK, Content-Type: text/xml
- `https://www.sierraskyeview.com/robots.txt` → 200 OK, Content-Type: text/plain

## Notes

1. Replace `YOUR_API_TOKEN` with your actual Cloudflare API token
2. Rules take effect immediately but may take 5-10 minutes to propagate globally
3. Google Search Console should be able to access the sitemap within 24-48 hours
4. Monitor the sitemap status in Google Search Console after configuration
