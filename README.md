# Component Library

This is my practice project built with **React + Vite**, focusing on reusable UI Component styled with **TailwindCSS**.
Feel free to copy any component or even the entire project structure for your learning or studying purposes.

I'm truly grateful for any **feedback, comments, or bug reports** that help me improve these solutions — thank you so much in advance! 💛

## Overview

Each component includes its own documentation covering typography, layout, and other details.  
You can find these files in: `components/ui/[component-name]/README.md`

## Live demo

https://dlnthanh262.github.io/components/

## 🛠️ Tech Stack

- **React**
- **Vite**
- **TypeScript**
- **TailwindCSS**

## Architectural Pattern

This structure follows a Modular / Feature-based architecture, emphasizing isolation and reusability.

```
src/
├── components/
│   ├── ui/
│   │   ├── [component-name]/
│   │   │   ├── [component-name].tsx      # UI logic
│   │   │   ├── [component-name].css      # Component-specific styles
│   │   │   ├── index.ts                  # Re-export for cleaner imports
│   └── └── └── README.md                 # Docs for UI layer
│
│
├── config/
│   ├── component-data.ts                 # Sample data for components
│   ├── component-data.type.ts            # Data type definitions
│   └── index.ts
│
├── pages/
│   ├── home.tsx                          # Homepage listing components
│   ├── blog-review-card.tsx              # Dedicated page for one component
│   └── index.ts                          # Route exports
│
├── types/
│   ├── blog-review-card/
│   │   ├── index.ts                      # Type definitions for that component
│
├── utils/
│   ├── cn.ts                             # Utility for merging class names
│   └── index.ts
│
├── App.tsx                               # App root — sets up router and layout
├── main.tsx                              # React DOM entry point
├── index.css                             # Global styles + Tailwind base
├── App.css                               # App-level styles

```

## License

This project is open source and available for **educational use**.
