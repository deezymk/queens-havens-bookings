# Queens Haven — Boldly Beautiful

Booking site for Queens Haven nail & lash studio (Dawhenya, Tema 25). Built with
Vite + React + TypeScript + Tailwind CSS.

## Sections

- **Hero** — brand intro with a looping showcase video
- **Services** — Gel Polish (stick-on), Acrylic Nails, Acrylic Toes, Lash
  Extensions, Pedicure
- **Recent Works** — portfolio gallery
- **About** — the artist's story with portrait
- **FAQ** — accordion of booking, policy and aftercare questions
- **Book** — modal form (name, email, phone, service, date, time, optional
  inspo picture upload, payment method)
- **Footer** — hours, socials (TikTok, Instagram)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Booking form — connected to Supabase

The booking form saves every submission to a Supabase table called
`bookings`, and uploads any inspo photo to Supabase Storage.

**One-time setup:**

1. In your Supabase project, open **SQL Editor** and run
   `supabase/bookings-table.sql` — this creates the `bookings` table.
2. Go to **Storage > New bucket**, name it exactly `inspo-images`, and mark
   it **Public**.
3. Back in **SQL Editor**, run `supabase/storage-policy.sql` — this lets the
   public site upload inspo photos into that bucket.
4. Copy `.env.example` to `.env.local` and fill in your project's URL and
   anon key (find these under **Project Settings > API**).
5. Restart `npm run dev` after adding `.env.local` so Vite picks it up.

**Viewing bookings:** Supabase dashboard > **Table Editor** > `bookings`.

**Deploying:** add the same two env vars (`VITE_SUPABASE_URL`,
`VITE_SUPABASE_ANON_KEY`) under your Vercel project's **Settings >
Environment Variables**, then redeploy.

## Deploying

This is a static Vite build, so it deploys cleanly to Vercel, Netlify, or
GitHub Pages:

```bash
npm run build
```

then upload/point your host at the generated `dist/` folder (Vercel/Netlify
can also build directly from this repo with the default `npm run build`
command and `dist` as the output directory).

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Queens Haven booking site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
