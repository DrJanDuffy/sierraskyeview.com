# Fix: Duplicate Content Issue - Model Residence Pages

## Problem
Google Search Console was showing "Duplicate without user-selected canonical" errors for:
- `https://www.sierraskyeview.com/model-1965`
- `https://www.sierraskyeview.com/model-1708`

## Root Cause
The site had duplicate pages:
- `/model-1965` (main page)
- `/model-residence-1965` (redirect page)
- `/model-1708` (main page)
- `/model-residence-1708` (redirect page)

The `model-residence-*` pages were using **client-side redirects** (`router.replace()`), which:
- Google crawlers don't follow properly
- Causes Google to see them as separate pages with similar content
- Results in duplicate content warnings

## Solution
Added **server-side 301 permanent redirects** in `next.config.js`:

```javascript
{
  source: '/model-residence-1602',
  destination: '/model-1602',
  permanent: true,  // 301 redirect
},
{
  source: '/model-residence-1708',
  destination: '/model-1708',
  permanent: true,
},
{
  source: '/model-residence-1965',
  destination: '/model-1965',
  permanent: true,
}
```

## Why This Works
- ✅ **Server-side redirects** are properly followed by Google crawlers
- ✅ **301 permanent redirects** pass link equity to the canonical URL
- ✅ Google will understand that `model-residence-*` pages redirect to `model-*` pages
- ✅ Eliminates duplicate content warnings

## Testing
After deployment, test the redirects:

```bash
# Should return 301 redirect to /model-1965
curl -I https://www.sierraskyeview.com/model-residence-1965

# Should return 301 redirect to /model-1708
curl -I https://www.sierraskyeview.com/model-residence-1708

# Should return 301 redirect to /model-1602
curl -I https://www.sierraskyeview.com/model-residence-1602
```

Expected results:
- Status: `301 Moved Permanently`
- Location header: Points to the corresponding `/model-*` page

## Next Steps in Google Search Console

### 1. Request Re-indexing
1. Go to **URL Inspection** tool
2. Enter: `https://www.sierraskyeview.com/model-1965`
3. Click **Request Indexing**
4. Repeat for `https://www.sierraskyeview.com/model-1708`

### 2. Mark as Fixed
1. Go to **Coverage** → **Excluded** or **Valid with warnings**
2. Find the duplicate content issues
3. After Google recrawls (1-2 weeks), the issues should be marked as "Fixed"

### 3. Monitor
- Check Search Console in 1-2 weeks
- The duplicate content warnings should clear
- Both pages should be properly indexed with the canonical URL

## Timeline
- **Immediate**: Server-side redirects are configured
- **After deployment**: Redirects will return 301 status
- **1-2 weeks**: Google recrawls and updates Search Console
- **2-4 weeks**: Duplicate content warnings should clear

## Notes
- The `model-residence-*` pages still exist as fallback (client-side redirect)
- Server-side redirects take precedence and will be used by Google
- All pages have proper canonical tags pointing to the main `model-*` pages
- This fix ensures Google properly understands the redirect relationship

