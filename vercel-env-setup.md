# Vercel Environment Variables Setup

## Required Environment Variables

Add these exact variables in your Vercel project settings:

### 1. Go to Vercel Dashboard
- Navigate to your project: `sierraskyeview.com`
- Go to **Settings** → **Environment Variables**

### 2. Add These Variables:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=ddjixgcbk
CLOUDINARY_API_KEY=315694383945135
CLOUDINARY_API_SECRET=BBWXrhzVJLAciCzukIoLHMp602c
CLOUDINARY_FOLDER=sierraskyeview
```

### 3. Environment Selection:
- ✅ **Production**
- ✅ **Preview** 
- ✅ **Development**

### 4. After Adding Variables:
- Click **Save**
- Go to **Deployments** tab
- Click **Redeploy** on the latest deployment

## Cloudinary Setup Complete:
- ✅ Cloud Name: `ddjixgcbk`
- ✅ API Key: `315694383945135`
- ✅ API Secret: `BBWXrhzVJLAciCzukIoLHMp602c`
- ✅ Folder: `sierraskyeview` (created)
- ✅ Next.js build: ✅ Working
- ✅ Static generation: ✅ Working

## Next Steps:
1. Upload your images to the `sierraskyeview` folder in Cloudinary Media Library
2. Deploy to Vercel with these environment variables
3. Your photo gallery will be live!

## Image Upload Instructions:
1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Navigate to **Media Library**
3. Create folder: `sierraskyeview` (if not exists)
4. Upload your photos to this folder
5. The gallery will automatically display them
