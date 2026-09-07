/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        huki: {
          green: "#006B4F",
          "green-dark": "#00523C",
          "green-light": "#E6F4F0",
          "green-subtle": "#EEF7F4",
          orange: "#E98A15",
          "orange-light": "#FEF3E2",
          charcoal: "#1A2421",
          muted: "#6B7A75",
          border: "#E8ECEB",
          bg: "#F9FBFB",
          surface: "#FFFFFF"
        },
        "huki-amber": "#E98A15",
        "huki-emerald": "#006B50",
        "huki-emerald-dark": "#004D38",
        "huki-emerald-deeper": "#003828",
        "huki-emerald-pale": "#EEF8F5",
        "huki-mint-bg": "#EEF7F4",
        "huki-soft-mint": "#EEF7F4",
        // Literary Salon & Modern Vietnamese Bookshop Theme Tokens
        "primary": "#ac2c19",
        "tertiary-fixed": "#94f5d6",
        "on-tertiary-fixed": "#002018",
        "on-tertiary-fixed-variant": "#005140",
        "on-primary": "#ffffff",
        "primary-container": "#cf442e",
        "on-primary-container": "#fffbff",
        "primary-dark": "#8e1404",
        
        "secondary": "#855300",
        "secondary-container": "#fea619",
        "on-secondary-container": "#684000",
        "amber-gold": "#f59e0b",
        
        "tertiary": "#006953",
        "tertiary-container": "#13846a",
        "on-tertiary-container": "#f5fff9",
        "pine-dark": "#003b2b",
        
        "surface": "#f2fbf9",
        "background": "#f2fbf9",
        "on-background": "#141d1c",
        "surface-warm": "#f8f6f1",
        "surface-sepia": "#f4ecd8",
        "surface-dark": "#141d1c",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#ecf6f3",
        "surface-container": "#e6f0ee",
        "surface-container-high": "#e0eae8",
        "surface-container-highest": "#dbe5e2",
        
        "on-surface": "#141d1c",
        "on-surface-variant": "#59413c",
        "ink-dark": "#17201f",
        "ink-muted": "#6b7280",
        
        "outline": "#8d706b",
        "outline-variant": "#e1bfb8",
        "border-subtle": "#e8e5df",
        
        "error": "#ba1a1a",
        "error-container": "#ffdad6"
      },
      fontFamily: {
        serif: ["Newsreader", "serif"],
        sans: ["Be Vietnam Pro", "sans-serif"],
        "body-lg": ["Be Vietnam Pro"],
        "body-sm": ["Be Vietnam Pro"],
        "body-md": ["Be Vietnam Pro"],
        "display-lg": ["Newsreader"],
        "display-lg-mobile": ["Newsreader"],
        "headline-lg": ["Newsreader"],
        "headline-md": ["Newsreader"],
        "headline-sm": ["Newsreader"],
        "title-lg": ["Be Vietnam Pro"],
        "title-md": ["Be Vietnam Pro"],
        "label-md": ["Be Vietnam Pro"],
        "label-sm": ["Be Vietnam Pro"]
      },
      fontSize: {
        "body-lg": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-lg-mobile": ["34px", { lineHeight: "42px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.015em", fontWeight: "500" }],
        "headline-md": ["26px", { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "title-lg": ["18px", { lineHeight: "26px", fontWeight: "600" }],
        "title-md": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.04em", fontWeight: "600" }]
      },
      spacing: {
        "space-2xs": "0.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4.5rem",
        "gutter": "1.5rem",
        "margin-desktop": "3rem",
        "margin-tablet": "1.5rem",
        "margin-mobile": "1rem"
      },
      borderRadius: {
        'card': '18px'
      },
      boxShadow: {
        'book': '0 4px 20px -2px rgba(23, 32, 31, 0.04), 0 2px 6px -1px rgba(23, 32, 31, 0.02)',
        'book-hover': '0 12px 28px -4px rgba(23, 32, 31, 0.08), 0 4px 10px -2px rgba(23, 32, 31, 0.03)',
        'drawer': '0 20px 40px -8px rgba(23, 32, 31, 0.12), 0 8px 16px -4px rgba(23, 32, 31, 0.04)'
      }
    },
  },
  plugins: [],
}
