# Kinetic Coding Canvas

## Overview
Portfolio website for R N R Akshob Dhira built with React, TypeScript, Vite, and Tailwind CSS. Features an interactive animated interface with particle effects, coding profiles, projects showcase, skills display, YouTube integration, LinkedIn articles, and contact form.

**Current State**: Successfully imported and configured for Replit environment. The site is fully functional and ready for development/deployment.

## Recent Changes
- **2025-10-27**: Initial Replit setup completed
  - Configured Vite dev server for Replit (port 5000, host 0.0.0.0)
  - Set up development workflow
  - Configured deployment settings for autoscale
  - Installed all project dependencies

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 7.1.10
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives via shadcn/ui

### Project Structure
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── AboutSection.tsx
│   ├── AnimatedNeuralNetwork.tsx
│   ├── CodingProfiles.tsx
│   ├── ContactSection.tsx
│   ├── FloatingIcons.tsx
│   ├── HeroSection.tsx
│   ├── LinkedInArticles.tsx
│   ├── Navigation.tsx
│   ├── ParticlesBackground.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── ThemeToggle.tsx
│   └── YouTubeSection.tsx
├── hooks/
├── lib/
├── pages/
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx
├── App.tsx
└── main.tsx
```

### Development Configuration
- **Dev Server**: Runs on port 5000 with host 0.0.0.0
- **HMR**: Configured with clientPort 443 for Replit proxy
- **Workflow**: `npm run dev` starts Vite development server

### Deployment Configuration
- **Target**: Autoscale (static site)
- **Build Command**: `npm run build`
- **Run Command**: `npx vite preview --host 0.0.0.0 --port`
- **Output**: Static files in `dist/` directory

## Key Features
1. **Interactive Hero Section**: Animated introduction with particle effects
2. **Responsive Navigation**: Multi-section navigation with smooth scrolling
3. **Skills Display**: Visual representation of technical skills
4. **Projects Showcase**: Portfolio of completed projects
5. **YouTube Integration**: Displays YouTube content (requires API key)
6. **LinkedIn Articles**: Integration with LinkedIn content
7. **Contact Form**: User contact functionality
8. **Theme Toggle**: Dark/light mode support
9. **Animated Background**: Dynamic particle system

## Environment Setup

### Optional Configuration
- **YouTube Integration**: Set `VITE_YOUTUBE_API_KEY` and `VITE_YOUTUBE_CHANNEL_ID` environment variables to enable YouTube section
- **LinkedIn Integration**: Configure LinkedIn API credentials if needed

## Development Commands
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Notes
- The project uses shadcn/ui for UI components, which provides a comprehensive set of accessible, customizable React components
- Particle animations and floating icons add visual interest to the portfolio
- The site is fully responsive and works across different screen sizes
- YouTube section will show a configuration message until API credentials are provided (optional feature)
