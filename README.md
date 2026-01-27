# Drew House - Video Editor Portfolio

A high-end, minimalist portfolio website for a top-tier video editor built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Full-screen video background with bold headline
- **Project Grid**: Bento Grid layout with hover-to-play video previews
- **Project Details**: Individual pages for each project with client info, role, software, and process description
- **About Section**: Professional layout with headshot, big names worked with, and resume download
- **Contact Form**: Elegant form for inquiries
- **Dark Mode**: Optimized dark theme for showcasing video work
- **Animations**: Smooth transitions and micro-interactions using Framer Motion

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Customization

### Update Video Content

1. **Hero Section**: Edit `components/Hero.tsx` and replace the `videoId` prop with your showreel YouTube video ID
2. **Projects**: Update the `projects` array in `components/ProjectGrid.tsx` with your actual projects
3. **Project Details**: Update `projectData` in `app/projects/[id]/page.tsx` with your project information

### Update About Section

1. Replace the placeholder headshot in `components/About.tsx`
2. Update the "Worked With" companies list
3. Add your resume PDF to the `public` folder and ensure the link points to `/resume.pdf`

### Configure Contact Form

The contact form in `components/Contact.tsx` currently logs to console. To make it functional:

1. Integrate with a service like [Formspree](https://formspree.io/), [SendGrid](https://sendgrid.com/), or [Resend](https://resend.com/)
2. Update the `handleSubmit` function to send data to your chosen service

### Typography

The site uses Inter font by default. To use PP Neue Montreal:

1. Purchase/license PP Neue Montreal
2. Add the font files to `public/fonts`
3. Update `app/globals.css` to import the font
4. The font is already configured in `tailwind.config.js` as `font-display`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Video Hosting**: YouTube (embedded)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── projects/
│       └── [id]/
│           └── page.tsx    # Project detail pages
├── components/
│   ├── Hero.tsx            # Hero section with video background
│   ├── ProjectGrid.tsx     # Bento Grid project layout
│   ├── About.tsx           # About section
│   └── Contact.tsx         # Contact form
└── public/                 # Static assets (add resume.pdf here)
```

## Notes

- Replace all placeholder YouTube video IDs (`dQw4w9WgXcQ`) with your actual video IDs
- Add your resume PDF to the `public` folder
- Update the headshot placeholder in the About section
- Customize colors, spacing, and typography in `tailwind.config.js` and `app/globals.css` as needed
