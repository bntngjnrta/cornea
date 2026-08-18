<div align="center">

# 👁️ Cornea Studio

**Seeing Beyond, Building Forward.**

A modern, high-performance digital design & software agency portfolio website crafted with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Motion (Framer Motion)**.

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-v12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br />

[Live Demo](#-live-demo) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Folder Structure](#-folder-structure) • [Getting Started](#-getting-started) • [Deployment](#-deployment)

</div>

---

## 📖 Overview

**Cornea Studio** is a full-featured, agency-grade web application built to showcase digital products, design services, client case studies, and engineering capabilities. Designed with attention to aesthetic excellence, fluid micro-interactions, responsive typography, and accessibility.

---

## ✨ Features

- 🌓 **Dark & Light Mode**: Seamless system/user theme switching with zero flash of unstyled content powered by `next-themes`.
- 🌐 **Bilingual Support (i18n)**: Instant, client-side language toggle between **Indonesian (ID)** and **English (EN)** without full page reloads.
- 🎬 **Fluid Motion & Scroll Animations**:
  - Interactive **Hero Video Background** with animated typography effects.
  - **Scroll-triggered stagger animations** using custom `ScrollView` and `InView` viewport observers.
  - **Dynamic Morphing Custom Cursor** that follows and expands over interactive project cards.
  - **Infinite sliding marquee** for client and partner brand logos.
  - **Animated sliding counter** for metrics and key statistics.
- 💼 **Interactive Portfolio Showcase**: High-impact cards with hover-depth zoom effects, custom cursor hints, and metadata tags.
- 📬 **Full-Stack Contact Form API**: Integrated Next.js Route Handler (`/api/contact`) sending automated emails via **Nodemailer (Gmail SMTP)** with input validation and feedback states.
- 💬 **Quick WhatsApp Action**: Floating, animated WhatsApp widget with pre-formatted inquiry text.
- 📱 **Fully Responsive Layout**: Mobile-first design, fluid navigation drawer, and crisp typography on all screen sizes.
- 🧩 **Clean Modular Architecture**: Organized component hierarchies separating Layout, Sections, Motion primitives, and Shadcn UI primitives.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
|---|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) | App Router, Server/Client Components, Next Turbopack |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety and autocompletion across the app |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern CSS variables, utility classes, theme tokens |
| **Animation** | [Motion (Framer Motion)](https://motion.dev/) | Spring physics, layout animations, custom cursors, text effects |
| **UI Primitives** | [Radix UI](https://www.radix-ui.com/) / [Shadcn UI](https://ui.shadcn.com/) | Accessible dialogs, buttons, avatars, forms, badges |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, lightweight SVG icon system |
| **Mailing / API** | [Nodemailer](https://nodemailer.com/) | Secure SMTP delivery for contact form inquiries |
| **Package Manager** | [pnpm](https://pnpm.io/) | Fast, disk-efficient dependency management |

---

## 📂 Folder Structure

```
cornea-studio/
├── public/
│   ├── images/
│   │   ├── company/            # Client and partner company logos
│   │   ├── portfolio/          # Portfolio showcase screenshots and project assets
│   │   └── ...                 # Abstract graphics and team avatars
│   ├── hero-light.mp4          # Hero section background video
│   └── favicon.svg             # Favicon asset
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts    # API Route Handler for contact form submissions (Nodemailer)
│   │   ├── globals.css         # Global stylesheet & Tailwind CSS v4 custom theme tokens
│   │   ├── layout.tsx          # Root layout with ThemeProvider, LanguageProvider, and Header
│   │   └── page.tsx            # Main landing page assembling modular section components
│   ├── components/
│   │   ├── layout/             # Global layout & navigational components
│   │   │   ├── header.tsx      # Responsive navbar with blur backdrop & navigation menu
│   │   │   ├── footer.tsx      # Global footer section
│   │   │   ├── theme-toggle.tsx# Light/Dark mode switcher button
│   │   │   ├── language-toggle.tsx # ID/EN language switcher button
│   │   │   └── whatsapp-button.tsx # Floating interactive WhatsApp contact widget
│   │   ├── motion/             # Framer Motion primitives & animation utilities
│   │   │   ├── animated-group.tsx  # Staggered entrance animations for container groups
│   │   │   ├── cursor.tsx          # Smooth spring cursor tracking primitive
│   │   │   ├── custom-cursor.tsx   # Interactive hover-magnifying cursor element
│   │   │   ├── in-view.tsx         # Viewport intersection observer animation wrapper
│   │   │   ├── infinite-slider.tsx # Seamless infinite looping carousel for logo cloud
│   │   │   ├── morphing-dialog.tsx # Smooth morphing modal dialog animations
│   │   │   ├── number-effect.tsx   # Animated numeric counter with spring transitions
│   │   │   ├── progressive-blur.tsx# Multi-layer progressive backdrop blur effect
│   │   │   ├── scroll-view.tsx     # Reusable scroll-triggered viewport reveal wrapper
│   │   │   ├── sliding-number.tsx  # Digit-by-digit sliding numbers
│   │   │   └── text-effect.tsx     # Word/character staggered typography reveal effect
│   │   ├── providers/          # Context and theme providers
│   │   │   └── theme-provider.tsx  # Next-themes provider wrapper
│   │   ├── sections/           # Page sections (Clean, self-contained components)
│   │   │   ├── hero-section.tsx    # Hero header with typography animation & background video
│   │   │   ├── logo-cloud.tsx      # Partner & client infinite slider marquee
│   │   │   ├── about-section.tsx   # Company vision, mission, and core values
│   │   │   ├── services-section.tsx# Service list with tags, descriptions, and interactive cursor
│   │   │   ├── portfolio-card.tsx  # Individual portfolio item card component
│   │   │   ├── portfolio-section.tsx # Showcase grid of featured client projects
│   │   │   ├── stats-section.tsx   # Studio statistics with animated count-up numbers
│   │   │   ├── testimonials-section.tsx # Bento-style client testimonials grid
│   │   │   ├── team-section.tsx    # Core team member profile cards
│   │   │   └── contact-section.tsx # Interactive contact form connected to the backend API
│   │   ├── ui/                 # Reusable Shadcn UI atomic primitives
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── select.tsx
│   │   │   └── textarea.tsx
│   │   └── logo.tsx            # SVG Studio Brand Logo component
│   ├── content/                # Static data & project showcase content definitions
│   │   ├── footer.ts
│   │   ├── nav.ts
│   │   ├── portfolio.ts
│   │   └── services.ts
│   ├── context/
│   │   └── language-context.tsx# React Context for bilingual ID/EN language state
│   ├── hooks/
│   │   └── use-click-outside.ts# Custom hook for detecting clicks outside referenced DOM elements
│   ├── i18n/                   # Dictionary translations
│   │   ├── en.ts               # English vocabulary & copy
│   │   ├── id.ts               # Indonesian vocabulary & copy
│   │   └── index.ts            # Translation hook (`useT()`) and utilities
│   └── lib/
│       └── utils.ts            # Tailwind class merging utility (`cn`)
├── .env.example                # Environment variables template
├── components.json             # Shadcn UI configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies & scripts
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- [pnpm](https://pnpm.io/) (or `npm` / `yarn` / `bun`)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cornea-studio.git
cd cornea-studio
```

### 2. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file by copying the template:

```bash
cp .env.example .env.local
```

Open `.env.local` and add your Gmail credentials if you want to test the email contact form:

```env
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

> **Note:** To generate a Gmail App Password:
> 1. Go to your [Google Account Security](https://myaccount.google.com/security)
> 2. Enable **2-Step Verification**
> 3. Search for **App Passwords**
> 4. Create an app password named "Cornea Studio" and paste the 16-character code into `GMAIL_APP_PASSWORD`.

### 4. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `pnpm dev` | Starts local Next.js dev server with Turbopack |
| `build` | `pnpm build` | Compiles optimized production build |
| `start` | `pnpm start` | Runs the production server |
| `lint` | `pnpm lint` | Runs ESLint checks across codebase |

---

## 🌐 Internationalization (i18n)

The project includes an in-app bilingual localization engine:
- Language dictionary files are located in `src/i18n/en.ts` and `src/i18n/id.ts`.
- Components easily consume localized copy via the `useT()` hook:

```tsx
import { useT } from "@/i18n";

export default function MyComponent() {
  const t = useT();
  return <h2>{t.hero.heading}</h2>;
}
```

---

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is through [Vercel](https://vercel.com/):

1. Push your code to your GitHub repository.
2. Import your repository into Vercel.
3. Configure the environment variables (`GMAIL_USER`, `GMAIL_APP_PASSWORD`).
4. Click **Deploy**.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Crafted with ❤️ by <a href="https://github.com/bntngjnrta">Kadek Bintang Januarta</a> & the Cornea Studio Team.</sub>
</div>
