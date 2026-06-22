# SeniorShare

A welcoming platform for seniors to share wisdom, connect with community, and stay close to family.

Built with [TanStack Start](https://tanstack.com/start), React 19, Tailwind CSS 4, and Supabase.

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template and add your Supabase credentials:

```bash
cp .env.example .env
```

3. Start the development server:

```bash
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
src/
├── components/     # Shared UI components
├── integrations/ # Supabase and external services
├── lib/          # Utilities
├── routes/       # File-based routes (TanStack Router)
└── styles.css    # Global styles and design tokens
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous/public key |

## License

Private — all rights reserved.
