# Google Setup Instructions for sierraskyeview.com

## 🎯 Quick Start Guide

Follow these steps to complete Google setup for your website. The site is technically ready - you just need to add verification codes and tracking IDs.

## Step 1: Google Search Console Setup (15 minutes)

### 1.1 Verify Domain Ownership
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property"
3. Enter: `https://www.sierraskyeview.com`
4. Choose "HTML tag" verification method
5. Copy the `content` value from the meta tag (it will look like: `abc123def456...`)
6. Open `pages/_document.tsx` in your code editor
7. Find line 117 (the commented Google Search Console verification)
8. Replace `YOUR_VERIFICATION_CODE_HERE` with your actual code
9. Uncomment the line (remove `{/* */}`)
10. Save and commit the file
11. Deploy to production
12. Click "Verify" in Google Search Console

### 1.2 Submit Sitemap
1. In Google Search Console, go to "Sitemaps" in the left menu
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait 24-48 hours for Google to process

### 1.3 Request Indexing for Key Pages
1. In Google Search Console, use "URL Inspection" tool
2. Request indexing for these priority pages:
   - https://www.sierraskyeview.com/
   - https://www.sierraskyeview.com/services
   - https://www.sierraskyeview.com/floor-plans
   - https://www.sierraskyeview.com/homes-near-mount-charleston
   - https://www.sierraskyeview.com/northwest-las-vegas-new-homes

## Step 2: Google Analytics 4 Setup (20 minutes)

### 2.1 Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin" (gear icon)
3. In "Property" column, click "Create Property"
4. Property name: "Sierra at Skyeview Homes"
5. Time zone: (GMT-08:00) Pacific Time
6. Currency: USD
7. Click "Next"
8. Business information:
   - Industry: Real Estate
   - Business size: Small
9. Click "Create"
10. Accept terms
11. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### 2.2 Add Tracking Code to Website
1. Open `pages/_document.tsx` in your code editor
2. Find the Google Analytics section (around line 130)
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID (twice)
4. Uncomment the scripts (remove `{/* */}`)
5. Save and commit the file
6. Deploy to production

### 2.3 Set Up Conversion Goals
1. In Google Analytics, go to "Admin" > "Events"
2. Create custom events for:
   - **Phone Calls:** Event name: `phone_click`
   - **Email Clicks:** Event name: `email_click`
   - **Form Submissions:** Event name: `form_submit`
3. Mark these as conversions in "Admin" > "Conversions"

## Step 3: Google Business Profile Setup (30 minutes)

### 3.1 Claim or Create Profile
1. Go to [Google Business Profile](https://business.google.com/)
2. Search for "Dr. Jan Duffy Real Estate" or "Sierra at Skyeview Homes"
3. If found, claim it. If not, create new profile

### 3.2 Complete Business Information
**Business Name:** Dr. Jan Duffy Real Estate  
**Address:** 8925 Vanhoy Creek St., Las Vegas, NV 89166  
**Phone:** (702) 500-1955  
**Website:** https://www.sierraskyeview.com  
**Category:** Real Estate Agent  
**Service Area:** Las Vegas, NV

### 3.3 Add Business Hours
- Monday - Friday: 9:00 AM - 6:00 PM
- Saturday: 10:00 AM - 4:00 PM
- Sunday: 12:00 PM - 4:00 PM

### 3.4 Add Services
- Buyer Representation
- New Construction Specialist
- Real Estate Consulting
- Skye Canyon Homes Specialist

### 3.5 Add Photos
Upload high-quality photos:
- Dr. Jan Duffy professional photo
- Sierra at Skyeview Homes exteriors
- Community amenities
- Interior photos
- Skye Canyon community features

### 3.6 Add Description
"Expert buyer's agent specializing in new construction homes at Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas. Providing independent buyer representation and realtor service when buying a new home. Located at 3,000+ foot elevation near Mount Charleston."

## Step 4: Verify Everything Works (24-48 hours)

### 4.1 Google Search Console
- [ ] Domain verified
- [ ] Sitemap submitted and processed
- [ ] Key pages indexed
- [ ] No crawl errors
- [ ] Core Web Vitals passing

### 4.2 Google Analytics
- [ ] Tracking code active
- [ ] Real-time data showing
- [ ] Conversions tracking
- [ ] Events firing correctly

### 4.3 Google Business Profile
- [ ] Profile complete
- [ ] Verified (if required)
- [ ] Photos uploaded
- [ ] Hours set
- [ ] Services listed

## 📊 Monitoring Checklist

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Review top search queries
- [ ] Monitor click-through rates
- [ ] Check Google Business Profile insights

### Monthly
- [ ] Review Google Analytics reports
- [ ] Analyze conversion rates
- [ ] Check keyword rankings
- [ ] Update Google Business Profile posts
- [ ] Respond to Google reviews

## 🔗 Important Links

- **Google Search Console:** https://search.google.com/search-console/
- **Google Analytics:** https://analytics.google.com/
- **Google Business Profile:** https://business.google.com/
- **Sitemap:** https://www.sierraskyeview.com/sitemap.xml
- **Robots.txt:** https://www.sierraskyeview.com/robots.txt

## 📝 Files to Edit

1. **pages/_document.tsx**
   - Line ~117: Google Search Console verification
   - Line ~130: Google Analytics tracking code

## ✅ Pre-Flight Checklist

Before starting, ensure:
- [x] Site is live at https://www.sierraskyeview.com
- [x] Sitemap is accessible: https://www.sierraskyeview.com/sitemap.xml
- [x] Robots.txt is accessible: https://www.sierraskyeview.com/robots.txt
- [x] All pages load correctly
- [x] HTTPS is working
- [x] Mobile-friendly design

## 🚨 Common Issues & Solutions

### Issue: Google Search Console verification fails
**Solution:** 
- Ensure the meta tag is in the `<head>` section
- Make sure it's deployed to production
- Wait a few minutes after deployment before verifying

### Issue: Google Analytics not tracking
**Solution:**
- Check browser console for errors
- Verify Measurement ID is correct
- Ensure scripts are uncommented
- Check that site is deployed

### Issue: Sitemap not processing
**Solution:**
- Verify sitemap is accessible at /sitemap.xml
- Check for XML errors
- Wait 24-48 hours for processing
- Resubmit if needed

---

**Need Help?** All code is ready - just add your verification codes and tracking IDs!

