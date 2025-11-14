# Site Improvement Recommendations for Sierra at Skyeview Homes

## 🎯 Priority 1: High-Impact Improvements (Do First)

### 1. **Update H1 on Homepage** ⚠️ CRITICAL
**Current Issue:** H1 says "Sierra at Skyeview Homes - New Construction in Las Vegas" but title tag says "Homes for Sale Skye Canyon"
**Fix:** Align H1 with hyperlocal keywords
```tsx
// Current (line 212):
<h1>Sierra at Skyeview Homes - New Construction in Las Vegas</h1>

// Should be:
<h1>Homes for Sale Skye Canyon | New Construction Near Mount Charleston</h1>
```

### 2. **Add RealEstateAgent Schema to More Pages**
**Current:** Only on homepage and contact page
**Recommendation:** Add to:
- Services page (most important)
- About page
- All model pages (1602, 1708, 1965)

**Why:** Better rich snippets in search results, more trust signals

### 3. **Add LocalBusiness Schema with Address**
**Current:** Organization schema exists but missing specific address
**Fix:** Add complete address to LocalBusiness schema:
```json
{
  "@type": "LocalBusiness",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8925 Vanhoy Creek St.",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89166",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.2844",
    "longitude": "-115.3153"
  }
}
```

### 4. **Add Breadcrumb Schema to ALL Pages**
**Current:** Only on floor-plans page
**Recommendation:** Add breadcrumbs to:
- Model pages (1602, 1708, 1965)
- Quick move-in page
- New build homes page
- Services page

**Why:** Better navigation, improved SEO, rich snippets

### 5. **Improve Internal Linking Structure**
**Current:** Basic navigation, limited contextual links
**Recommendations:**
- Add "Related Homes" section on model pages linking to other models
- Add "You might also like" sections
- Create topic clusters (e.g., all "quick move-in" content linked together)
- Add footer links to key pages with keyword-rich anchor text

---

## 🚀 Priority 2: Content & SEO Enhancements

### 6. **Add More Long-Form Content Pages**
**Missing Content Opportunities:**
- "Buying a New Construction Home in Skye Canyon: Complete Guide"
- "Why Use a Realtor When Buying a New Home in Northwest Las Vegas"
- "Skye Canyon vs. Other Las Vegas Communities: Comparison Guide"
- "Mount Charleston Area Living: What to Know"

**Why:** More pages = more keyword opportunities, better topical authority

### 7. **Add FAQ Schema to More Pages**
**Current:** Only on QA page
**Recommendation:** Add FAQ sections to:
- Model pages (common questions about each floor plan)
- Services page (questions about realtor services)
- Quick move-in page (questions about move-in process)

**Why:** FAQ rich snippets = more visibility in search

### 8. **Add Review Schema to Homepage**
**Current:** Reviews exist but no aggregate rating schema on homepage
**Fix:** Add aggregateRating schema to homepage:
```json
{
  "@type": "LocalBusiness",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "X"
  }
}
```

### 9. **Create Location-Specific Landing Pages**
**New Pages to Create:**
- `/homes-near-mount-charleston`
- `/northwest-las-vegas-new-homes`
- `/sky-canyon-89166-homes-for-sale`
- `/realtor-service-skye-canyon`

**Why:** Capture hyperlocal searches, less competition

### 10. **Add Image Schema Markup**
**Current:** Images exist but no structured data
**Fix:** Add ImageObject schema to gallery images with:
- Captions with keywords
- Location data
- Alt text optimization

---

## 💡 Priority 3: User Experience & Conversion

### 11. **Add Sticky CTA Bar on Mobile**
**Current:** Phone number in nav, but not always visible
**Fix:** Add floating/sticky CTA bar on mobile:
```tsx
<div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 z-50 md:hidden">
  <a href="tel:7025001955" className="flex items-center justify-center gap-2">
    📞 Call Now: (702) 500-1955
  </a>
</div>
```

### 12. **Add Click-to-Call Buttons Everywhere**
**Current:** Phone links exist but could be more prominent
**Recommendation:** 
- Make phone numbers larger
- Add "Click to Call" text on mobile
- Add phone icon buttons in hero sections

### 13. **Add Lead Capture Forms**
**Missing:** No email capture forms for leads
**Recommendation:** Add forms to:
- Homepage (newsletter/updates)
- Model pages (request info about specific floor plan)
- Quick move-in page (schedule tour)

### 14. **Add Social Proof Widgets**
**Current:** Reviews exist but not prominently displayed
**Recommendation:**
- Add rotating testimonials in sidebar
- Add "Recent Sales" section
- Add "Trusted by X families" counter

### 15. **Improve Mobile Menu**
**Current:** Basic hamburger menu
**Recommendation:** 
- Add phone number prominently in mobile menu
- Add quick links (Quick Move-In, Mortgage Calculator)
- Add "Schedule Tour" button

---

## ⚡ Priority 4: Technical Performance

### 16. **Optimize Images**
**Current:** Many images use `unoptimized` prop
**Fix:**
- Remove `unoptimized` where possible
- Use Next.js Image optimization
- Add proper `sizes` attribute
- Convert to WebP format

### 17. **Add Loading States**
**Current:** No loading indicators for iframes/widgets
**Fix:** Add skeleton loaders for RealScout widgets

### 18. **Improve Page Speed**
**Recommendations:**
- Lazy load images below fold
- Defer non-critical JavaScript
- Minimize CSS
- Add resource hints (preconnect, prefetch)

### 19. **Add Analytics Events**
**Missing:** No event tracking
**Recommendation:** Track:
- Phone clicks
- Email clicks
- Form submissions
- Widget interactions
- Scroll depth

### 20. **Add Error Boundaries**
**Current:** No error handling
**Fix:** Add React error boundaries for better UX

---

## 📱 Priority 5: Mobile Optimization

### 21. **Test Mobile Navigation**
**Current:** Mobile menu exists but may need improvement
**Check:**
- Is it easy to find?
- Does it show all important links?
- Is phone number visible?

### 22. **Optimize Forms for Mobile**
**Current:** Forms may not be mobile-friendly
**Check:**
- Large touch targets
- Proper input types
- Auto-complete enabled
- Easy to submit

### 23. **Improve Mobile Typography**
**Recommendation:**
- Ensure text is readable (16px minimum)
- Proper line spacing
- Adequate contrast

---

## 🔍 Priority 6: Advanced SEO

### 24. **Add Video Schema**
**Current:** VideoObject schema exists but may not be complete
**Recommendation:** Add video schema for:
- Virtual tours
- Community walkthroughs
- Testimonial videos

### 25. **Create XML Sitemap for Images**
**Current:** Images not in sitemap
**Fix:** Add image sitemap or include images in main sitemap

### 26. **Add hreflang Tags** (if needed)
**Current:** English only
**Future:** If expanding to Spanish-speaking market

### 27. **Add Open Graph Video Tags**
**Current:** Basic OG tags
**Enhancement:** Add video tags for better social sharing

### 28. **Create Blog Section**
**Missing:** No blog/content hub
**Recommendation:** Create `/blog` with articles:
- "5 Things to Know Before Buying New Construction in Skye Canyon"
- "Why 89166 is the Best Zip Code for New Homes"
- "Mount Charleston Area: Complete Neighborhood Guide"

---

## 🎨 Priority 7: Design & UX Polish

### 29. **Add Trust Badges**
**Recommendation:** Display:
- BBB rating (if applicable)
- Real estate license number more prominently
- Years of experience
- Number of homes sold

### 30. **Add Comparison Tables**
**Missing:** No easy way to compare floor plans
**Recommendation:** Add comparison table on floor-plans page

### 31. **Improve CTA Hierarchy**
**Current:** Multiple CTAs, unclear priority
**Fix:** Establish clear hierarchy:
1. Primary: Call Now
2. Secondary: Schedule Tour
3. Tertiary: View Homes

### 32. **Add Exit Intent Popup**
**Missing:** No lead capture on exit
**Recommendation:** Add popup with:
- "Before you go, get instant updates on new homes"
- Email capture form
- Phone number

---

## 📊 Priority 8: Analytics & Tracking

### 33. **Set Up Google Analytics 4**
**Current:** Unknown if GA4 is configured
**Recommendation:** 
- Install GA4
- Set up conversion goals
- Track key events

### 34. **Set Up Google Search Console**
**Current:** Documentation exists but needs verification
**Action Items:**
- Verify domain ownership
- Submit sitemap
- Monitor performance

### 35. **Add Heat Mapping**
**Recommendation:** Tools like Hotjar or Microsoft Clarity
**Why:** Understand user behavior, optimize CTAs

---

## 🏆 Quick Wins (Do These First)

1. ✅ Fix H1 on homepage (5 minutes)
2. ✅ Add RealEstateAgent schema to services page (10 minutes)
3. ✅ Add breadcrumbs to model pages (15 minutes)
4. ✅ Add sticky mobile CTA (10 minutes)
5. ✅ Add FAQ schema to model pages (20 minutes)
6. ✅ Update _document.tsx with hyperlocal keywords (5 minutes)

---

## 📈 Expected Impact

**Short Term (1-3 months):**
- Better local search visibility
- Improved click-through rates from search
- More phone calls and leads

**Long Term (3-6 months):**
- Higher rankings for hyperlocal keywords
- More organic traffic
- Better conversion rates
- Stronger brand authority

---

## 🎯 Top 5 Must-Do Items

1. **Fix homepage H1** - Immediate SEO impact
2. **Add RealEstateAgent schema to services page** - Rich snippets
3. **Add breadcrumbs to all model pages** - Better navigation & SEO
4. **Add sticky mobile CTA** - More phone calls
5. **Create location-specific landing pages** - Capture hyperlocal searches

---

## 💬 Questions to Consider

1. Do you have Google Analytics set up? If so, what's your current conversion rate?
2. What's your primary goal: phone calls, form submissions, or both?
3. Do you have video content (virtual tours, testimonials)?
4. What's your average time to close a sale? (helps with remarketing)
5. Do you have a CRM to track leads from the website?

---

*Last Updated: January 2025*
*Priority levels based on impact vs. effort*

