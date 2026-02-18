[![Version](https://img.shields.io/badge/version-0.0.0-blue)](https://img.shields.io/) [![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white)](https://reactjs.org/) [![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?logo=vite&logoColor=white)](https://vitejs.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

# Dace's Samgyeopsal — Website

A responsive single-page website for Dace's Samgyeopsal, implemented with React, Vite, and TypeScript. The site includes a responsive navigation bar, menu listing, location/contact section, and testimonials.

---

## Quick start

Requirements: Node.js 16 or later

1. Install dependencies

   ```bash
   npm install
   ```

2. Run development server

   ```bash
   npm run dev
   ```

3. Build for production

   ```bash
   npm run build
   npm run preview
   ```

---

## Features

- Responsive single-page layout (Home, Menu, Location, Contact)
- Click-to-call phone link and Facebook link driven from `constants.ts`
- Animated mobile menu using `framer-motion`
- Component-based structure with TypeScript

---

## Editing content

- Update contact details and menu items in `constants.ts`.
- UI components are located in the `components/` directory (e.g. `Navbar.tsx`, `Menu.tsx`).

---

## Project structure (key files)

- `App.tsx`, `index.tsx` — application entry points
- `components/` — reusable UI sections
- `constants.ts` — contact info and menu data
- `package.json` — scripts and dependency metadata

---

## Contact

- Phone: 0938 475 2514
- Facebook: https://www.facebook.com/DaceSamgyeopsal/
- Address: Brgy. Banago (Beside Gasso), Nagcarlan, Philippines

---

## Tech stack

React • Vite • TypeScript • Framer Motion • lucide-react

---

## Notes

- Edit `MENU_ITEMS` in `constants.ts` to change displayed menu items.
- If you want CI badges, deployment configuration, or a repository screenshot added, I can add them on request.