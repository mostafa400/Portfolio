# Mostafa.AI Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, clean design with dark mode support
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 App Router
- 🎨 Styled with Tailwind CSS
- 🖼️ Optimized images with Next.js Image component
- 🎭 Interactive project modal
- 🔄 Smooth animations and transitions
- 🎯 SEO optimized

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Space Grotesk, Material Symbols
- **Images:** Next.js Image Optimization

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Skills.tsx           # Skills/tech stack section
│   ├── Projects.tsx         # Projects listing
│   ├── ProjectCard.tsx      # Individual project card
│   ├── ProjectModal.tsx     # Project details modal
│   ├── About.tsx            # About section
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## Customization

### Update Content

1. **Personal Information:** Edit the Hero and About sections in their respective components
2. **Projects:** Modify the projects array in `components/Projects.tsx`
3. **Skills:** Update the skills array in `components/Skills.tsx`
4. **Contact Links:** Update social media links in `components/About.tsx` and `components/Footer.tsx`

### Styling

- Colors and theme are configured in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### Adding a Chatbot (Future)

The project structure is ready for integrating a chatbot. Consider:
- Creating a new `components/Chatbot.tsx` component
- Adding state management (React Context or Zustand)
- Integrating with OpenAI API or similar service
- Adding a floating chat button in the layout

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js app can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## Performance Optimizations

- ✅ Image optimization with Next.js Image
- ✅ Font optimization with next/font
- ✅ Code splitting with App Router
- ✅ CSS optimization with Tailwind
- ✅ SEO meta tags in layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Future Enhancements

- [ ] Add blog section
- [ ] Integrate CMS for easy content updates
- [ ] Add contact form with email integration
- [ ] Implement chatbot functionality
- [ ] Add more project case studies
- [ ] Add animations with Framer Motion
- [ ] Add analytics (Google Analytics/Plausible)
- [ ] Add testimonials section
- [ ] Multi-language support
