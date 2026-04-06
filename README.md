# Raunak Shahu Portfolio

Personal portfolio website for Raunak Shahu, built to showcase skills, projects, hackathons, certifications, achievements, and contact details in a polished single-page experience.

## Overview

This portfolio is built with React, Vite, and Tailwind CSS. It uses motion-based UI, glassmorphism cards, a terminal-style hero section, and responsive layouts that work well on mobile and desktop.

## What’s Inside

- **Hero section** with social links, resume viewer, and a terminal-inspired intro
- **About section** with a short bio and quick stats
- **Hackathons section** with event details and image gallery support
- **Skills section** with a modern tech stack presentation
- **Certifications section** with modal image previews
- **Achievements section** highlighting key milestones
- **Projects section** with live demos, source links, and categories
- **Education and Contact sections** for background and outreach

## Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, custom CSS
- **Animation**: Framer Motion
- **UI Icons**: Lucide React
- **Deployment**: Netlify

## Key Features

- Responsive layout for mobile, tablet, and desktop
- Smooth animations and scroll-based section reveals
- Cloudinary-hosted images for projects and certifications
- Custom contact form via Netlify Functions
- Clean component-based structure for easy updates

## Project Structure

- `src/components` - all page sections and reusable UI pieces
- `src/constants/index.js` - portfolio content, links, projects, and metadata
- `src/assets` - local project images and static files
- `netlify/functions` - serverless email function

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/raunak2015/portfolio.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Notes

- Some media is loaded from Cloudinary to keep the app lightweight.
- The contact workflow is wired for Netlify deployment.

## License

This project is licensed under the MIT License.
