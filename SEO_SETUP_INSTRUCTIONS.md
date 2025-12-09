# SEO Setup Instructions for sierraskyeview.com

## Google Search Console Setup

### 1. Verify Domain Ownership
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add property: `https://sierraskyeview.com`
3. Choose "HTML tag" verification method
4. Add the verification meta tag to `pages/_document.tsx`

### 2. Submit Sitemap
1. In Search Console, go to "Sitemaps" section
2. Submit: `https://sierraskyeview.com/sitemap.xml`
3. Monitor indexing status

## Google Analytics 4 Setup

### 1. Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create new property for `sierraskyeview.com`
3. Get Measurement ID (GA4-XXXXXXXXX)

### 2. Add to Website
Add this code to `pages/_document.tsx` in the `<Head>` section:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA4-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA4-XXXXXXXXX');
</script>
```

## Local SEO Optimization

### 1. Google Business Profile
1. Create/claim Google Business Profile for "Dr. Jan Duffy Real Estate"
2. Address: 8925 Vanhoy Creek St., Las Vegas, NV 89166
3. Phone: (702) 903-4687
4. Website: https://sierraskyeview.com
5. Add high-quality photos of homes and community
6. Encourage customer reviews

### 2. Local Citations
Submit business to:
- Yelp
- Yellow Pages
- Better Business Bureau
- Realtor.com
- Zillow Premier Agent
- Local Las Vegas business directories

## Content SEO Checklist

### ✅ Completed
- [x] Unique, descriptive page titles
- [x] Meta descriptions under 160 characters
- [x] Proper H1, H2, H3 heading structure
- [x] Descriptive alt text for all images
- [x] Internal linking between related pages
- [x] Local business schema markup
- [x] FAQ schema markup on Q&A page
- [x] Sitemap.xml created
- [x] Robots.txt created
- [x] Mobile-responsive design
- [x] Fast loading images with lazy loading

### 🔄 Ongoing Tasks
- [ ] Regular content updates (pricing, availability)
- [ ] Monitor and respond to customer reviews
- [ ] Track keyword rankings
- [ ] Analyze traffic and conversion data
- [ ] Build quality backlinks

## Target Keywords

### Primary Keywords
- "Sierra at Skyeview"
- "Skye Canyon new homes"
- "Las Vegas new construction"
- "Century Communities Las Vegas"
- "Dr. Jan Duffy real estate"

### Long-tail Keywords
- "new homes Skye Canyon Las Vegas"
- "Sierra at Skyeview Homes"
- "Century Communities Skye Canyon"
- "Las Vegas new home construction"
- "Skye Canyon real estate agent"

## Performance Monitoring

### Key Metrics to Track
1. **Organic traffic growth**
2. **Keyword rankings** for target terms
3. **Local search visibility** for "Las Vegas real estate"
4. **Conversion rate** from website to leads
5. **Page load speed** (aim for under 3 seconds)
6. **Mobile usability** scores

### Tools to Use
- Google Search Console (search performance)
- Google Analytics (traffic and behavior)
- Google PageSpeed Insights (performance)
- SEMrush/Ahrefs (keyword tracking)
- BrightLocal (local SEO monitoring)

## Monthly SEO Tasks

1. **Week 1**: Check Search Console for indexing issues
2. **Week 2**: Update content with current pricing and availability
3. **Week 3**: Analyze traffic and conversion data
4. **Week 4**: Monitor and respond to reviews

## Contact Information for SEO Setup

- **Website**: https://sierraskyeview.com
- **Email**: DrDuffy@SierraSkyeview.com
- **Phone**: (702) 903-4687
- **Address**: 8925 Vanhoy Creek St., Las Vegas, NV 89166

---

*This document should be updated regularly as SEO strategies evolve and new opportunities arise.*



