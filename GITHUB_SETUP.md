# GitHub Setup Guide

## Step 1: Initialize Git Repository

Open your terminal in the project folder and run:

```bash
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Make Your First Commit

```bash
git commit -m "Initial commit - Portfolio website"
```

## Step 4: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it: `shahridan-portfolio` (or any name you like)
4. **DO NOT** check "Initialize with README" (we already have files)
5. Click **"Create repository"**

## Step 5: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shahridan-portfolio.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Important Notes:

✅ **`.env.local` is already in `.gitignore`** - Your EmailJS keys won't be uploaded (this is good for security!)

✅ **All your images and code will be uploaded**

✅ **After pushing, you can connect to Vercel/Netlify for hosting**

## Troubleshooting:

If you get authentication errors, you may need to:
- Use a Personal Access Token instead of password
- Or use GitHub Desktop (easier GUI option)

## Next Step After Pushing:

Once your code is on GitHub, you can:
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "Add New Project"
4. Import your repository
5. Add environment variables (EmailJS keys)
6. Deploy!

