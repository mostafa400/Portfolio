# 🚀 Quick Start Guide

## Getting Your Portfolio Running in 3 Steps

### Step 1: Install Dependencies
```bash
cd portfolio
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: http://localhost:3000

---

## ✨ What's Included

Your portfolio includes:

✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Dark Mode Ready** - Built-in dark mode support (toggle can be added)
✅ **Project Modal** - Click "View Case Study" to see the modal in action
✅ **Mobile Navigation** - Hamburger menu for mobile devices
✅ **Optimized Images** - Next.js Image component for fast loading
✅ **SEO Friendly** - Meta tags and proper structure
✅ **TypeScript** - Type safety throughout the project

---

## 🎨 Customization Guide

### 1. Update Your Information

**Hero Section** (`components/Hero.tsx`):
- Change the main title and subtitle
- Update availability status
- Replace hero image URL

**About Section** (`components/About.tsx`):
- Update your bio
- Change profile picture URL
- Update social media links

### 2. Add Your Projects

Edit `components/Projects.tsx` and update the `projects` array:

```typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description...",
    tags: ["Tag1", "Tag2"],
    imageUrl: "https://your-image-url.com",
    imageAlt: "Image description",
  },
  // Add more projects...
];
```

### 3. Update Tech Stack

Edit `components/Skills.tsx` and modify the `skills` array:

```typescript
const skills = [
  "Python",
  "React",
  "Your Tech",
  // Add your technologies...
];
```

### 4. Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  "primary": "#2463eb", // Change to your brand color
  // ... other colors
}
```

---

## 🤖 Adding a Chatbot (Future)

The structure is ready for a chatbot. Here's how to add one:

1. Create `components/Chatbot.tsx`
2. Add chatbot state management
3. Integrate with OpenAI API or your preferred service
4. Add a floating chat button to the layout

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All components automatically adjust to these breakpoints.

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Option 3: Your Own Server
```bash
npm run build
npm start
```

---

## 🔧 Common Tasks

### Add a New Section
1. Create component in `components/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to the page layout

### Change Fonts
Update the font imports in `app/globals.css` and `tailwind.config.ts`

### Add Dark Mode Toggle
Add a theme switcher component using `next-themes` package

---

## 📦 Project Structure

```
portfolio/
├── app/              # Next.js App Router
├── components/       # React components
├── public/          # Static files
└── package.json     # Dependencies
```

---

## 🆘 Need Help?

**Common Issues:**

1. **Images not loading?**
   - Check `next.config.js` has correct image domains
   
2. **Styles not working?**
   - Make sure Tailwind is properly configured
   - Check `globals.css` is imported

3. **Build errors?**
   - Delete `.next` folder and `node_modules`
   - Run `npm install` again

---

## 📈 Next Steps

1. ✅ Replace placeholder content with your own
2. ✅ Add real project images and descriptions
3. ✅ Update contact information
4. ✅ Connect social media accounts
5. ✅ Test on different devices
6. ✅ Deploy to production
7. ⏭️ Add chatbot functionality
8. ⏭️ Add blog section
9. ⏭️ Add contact form

---

**Happy Building! 🎉**
