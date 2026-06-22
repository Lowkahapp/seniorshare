# SenoShare

Secure home sharing for active older adults. SenoShare is a high-trust matching ecosystem that connects home providers and seekers—with identity verification, background screening, mediated introductions, and written co-living agreements.

Built with [TanStack Start](https://tanstack.com/start), React 19, Tailwind CSS 4, and Supabase.

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing page with trust framework and matching CTA |
| `/for-families` | Guide for adult children researching for a parent |
| `/how-it-works` | Full matching process and safety layers |
| `/onboarding` | Step-by-step profile wizard |
| `/pricing` | Browse free, verified member plans |
| `/support` | 24/7 member support contact |
| `/locations` | Active and upcoming cities |
| `/profile` | Member dashboard (auth required) |

## Deploy to Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new)
2. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`

## License

Private — all rights reserved.
