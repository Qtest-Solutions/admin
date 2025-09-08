# QTest Next.js Migration

This is the Next.js (App Router) version of the original Vite + React landing site.

## Scripts

- dev: next dev
- build: next build
- start: next start

## Tailwind

Already configured. Global styles in `app/globals.css`.

## Components migrated

Header, Hero, Services, About, Contact, Footer, AnimatedBackground.

## Next steps

1. Replace example domain in `app/layout.tsx` metadata.
2. Move any remaining assets from original `public/` to `next-app/public/` if needed.
3. Run `npm install` inside `next-app` then `npm run dev`.
4. Add route segments if you split sections into real pages.
