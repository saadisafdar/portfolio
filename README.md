# Saadi Safdar - Personal Portfolio Website

A complete, production-ready personal portfolio website built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Vanilla CSS resets
- **Animation**: Framer Motion
- **Icons**: Lucide React & Custom SVG brand paths
- **Bundler**: Vite

---

## Folder Structure

```text
portfolio/
├── dist/                     # Production build artifacts (created after build)
├── node_modules/             # Node dependencies
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── avatar.svg    # Flat-illustration vector avatar (young South Asian man)
│   ├── components/
│   │   ├── AboutSection.tsx  # Bio details, specialization grid, and location
│   │   ├── ExperienceSection.tsx # Combined Education & Experience timelines (defensive rendering)
│   │   ├── FindMeSection.tsx # CSS-only horizontal infinite marquee (respects prefers-reduced-motion)
│   │   ├── Footer.tsx        # 3-column contact list with copy-to-clipboard email
│   │   ├── HeroSection.tsx   # Overlapping Grid avatar layout & chrome-silver gradient display
│   │   ├── Navbar.tsx        # Responsive sticky glassmorphic navigation header
│   │   ├── ProjectCard.tsx   # Individual sticky card wrapper with fallback previews
│   │   ├── ProjectsSection.tsx # Sorts and maps projects (pinned highlights first)
│   │   └── SocialLinks.tsx   # Social icons mapping and pill badges
│   ├── data/
│   │   └── portfolio.json    # SINGLE DATA LAYER: Edits go here
│   ├── hooks/
│   │   └── usePortfolio.ts   # Custom React hook returning typed portfolio data
│   ├── types/
│   │   └── portfolio.ts      # TypeScript interfaces for full type-safety
│   ├── App.tsx               # Entry coordinator connecting sections in order
│   ├── index.css             # Main stylesheet imports, Google Fonts, and wrap fixes
│   └── main.tsx              # Strict mode DOM root mounting
├── index.html                # Page entrypoint (optimized SEO titles and description)
├── package.json              # Script configurations and packages
├── postcss.config.js         # PostCSS pipeline settings
├── tailwind.config.js        # Tailwind CSS theme configurations
├── tsconfig.json             # TypeScript rules (Strict, verbatimModuleSyntax)
└── vite.config.ts            # Vite compile plugins
```

---

## Getting Started

### Prerequisites
Ensure you have **Node.js** (v16+) and **npm** installed.

### Installation
1. Clone or open the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To launch the hot-reloading development server:
   ```bash
   npm run dev
   ```
   Open the address output in your terminal (usually [http://localhost:5173](http://localhost:5173)) in your browser.

### Building for Production
To bundle and compile the application for production hosting (compiled under `/dist`):
   ```bash
   npm run build
   ```

---

## How to Edit Portfolio Content

All copy, profile URLs, projects, skills, education, and social media handles are completely decoupled from the components. **To update any content, edit the JSON file directly at:**

👉 `src/data/portfolio.json`

### File Schema Guide

#### 1. Profile Details (`profile`)
```json
"profile": {
  "name": "Saadi Safdar",
  "shortName": "Saadi",
  "tagline": "...",
  "role": "...",
  "specialization": "...",
  "location": "...",
  "yearsOfExperience": "...",
  "bio": "...",
  "avatarSvg": "/src/assets/img/avatar.svg",
  "social": {
    "github": "https://github.com/saadisafdar",
    "linkedin": "https://linkedin.com/in/saadisafdar",
    "email": "saadisafder@yahoo.com"
  }
}
```
*Note: Any social link with an empty string `""` will automatically be hidden from the UI to prevent broken links.*

#### 2. Capabilities & Stack (`skills`)
Add skills to the specific category strings. Adding new categories will automatically scale the grid:
```json
"skills": {
  "categories": [
    { "name": "Languages", "items": ["C++", "Python", "SQL"] }
  ]
}
```

#### 3. Projects (`projects`)
- Pinned highlights: Set `"highlight": true` on a project to float it first on the dashboard.
- Previews: If no preview image is available, set `"image": ""` and the card will dynamically overlay the project title on a dark, geometric-gradient panel.
- Action Buttons: If the `"link"` is set to `""`, the "LIVE PROJECT" action button is defensively omitted.

#### 4. Education & Experience (`education`, `experience`)
- Monospace Pills: The `"period"` string is formatted inside a monospace badge.
- Timeline Stacking: Rows are numbered automatically (e.g. `01`, `02`).
- Empty Arrays: If `experience` is empty `[]`, that subsection is automatically hidden, ensuring the page remains clean and professional.
