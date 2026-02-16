# elaybachar.com

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Professional photography portfolio for **Elay Bachar** - a photographer based in Rishon LeZion, Israel, specializing in portrait, concept, and love photography.

Built with React, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Features

- **Portfolio Showcase** - Three curated galleries (Portrait, Concept, Love) with auto-playing carousels and full-size modal viewer
- **Smooth Animations** - Scroll-triggered transitions and parallax effects powered by Framer Motion
- **Fully Responsive** - Mobile-first design optimized for phones, tablets, and desktops with touch-friendly controls
- **Image Preloading** - Critical images load first with a progress indicator; remaining images load in the background
- **Contact Form** - Integrated with FormSubmit for email delivery, including spam protection
- **SEO Optimized** - Open Graph tags, Twitter Cards, and Schema.org structured data for rich search results
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation, and `prefers-reduced-motion` support

## Tech Stack

| Category       | Technology                                    |
| -------------- | --------------------------------------------- |
| Framework      | React 18 + TypeScript                         |
| Build Tool     | Vite 5                                        |
| Styling        | Tailwind CSS 3, PostCSS, Autoprefixer         |
| Animation      | Framer Motion                                 |
| Routing        | React Router DOM 7                            |
| Icons          | Lucide React, React Icons                     |
| Linting        | ESLint 9 + TypeScript ESLint                  |
| Deployment     | Vercel                                        |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/ddex3/elaybachar.com.git
cd elaybachar.com
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview   # preview the build locally
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx        # Responsive top nav with mobile menu
│   ├── Hero.tsx              # Full-screen hero section
│   ├── PortraitPortfolio.tsx # Portrait gallery carousel
│   ├── ConceptPortfolio.tsx  # Concept gallery carousel
│   ├── LovePortfolio.tsx     # Love/couples gallery carousel
│   ├── About.tsx             # Bio and social links
│   ├── Contact.tsx           # Contact form (FormSubmit)
│   ├── Thanks.tsx            # Post-submission confirmation
│   └── Footer.tsx            # Site footer
├── data/
│   └── portfolioData.ts      # Image paths for all galleries
├── hooks/
│   └── useRouter.ts          # Client-side routing with scroll behavior
├── App.tsx                   # Root component, routing, image preloader
├── main.tsx                  # Entry point
└── index.css                 # Tailwind directives and custom utilities
```

## Support

Found a bug or have a question? [Open an issue](https://github.com/ddex3/elaybachar.com/issues) on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Built with ❤️ by **[@ddex3](https://github.com/ddex3)**