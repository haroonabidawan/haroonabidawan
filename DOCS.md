# Repository docs

Technical reference for [haroonabidawan.com](https://haroonabidawan.com). Portfolio copy lives in the README and on the live site.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Motion

Full production toolkit with badges: [haroonabidawan.com/toolkit](https://haroonabidawan.com/toolkit). Source of truth: `lib/profile.ts`.

## Branches

Public repo. Three deploy lanes only.

| Branch | Use | Vercel |
| --- | --- | --- |
| **`production`** | Live site at [haroonabidawan.com](https://haroonabidawan.com). Default branch. | Production deploy |
| **`stage`** | Pre-production QA and client review. | Preview deploy only |
| **`dev`** | Active development and experiments. | Not deployed |

Vercel branch rules live in `vercel.json`. In the Vercel dashboard: **Settings → Git → Production Branch** → set to **`production`**.

```bash
git checkout dev        # daily work
git checkout stage      # merge dev when ready to preview
git checkout production # merge stage when ready to ship
```

## Local development

Requires [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Open [http://localhost:3000](http://localhost:3000).

Optional: set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local` for analytics during local testing.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/work` | Featured work |
| `/projects` | Full work list |
| `/experience` | Experience |
| `/services` | Services index |
| `/services/[slug]` | Service detail |
| `/toolkit` | Skills & stack |
| `/contact` | Contact |
| `/credits` | Credits & thanks |
| `/privacy` | Privacy |

## Project layout

Content and copy live in `lib/profile.ts`. Components in `components/`. Static assets in `public/`:

| Folder | Contents |
| --- | --- |
| `public/brand/` | Logo |
| `public/pages/` | Page header marks |
| `public/services/` | Service lane icons |
| `public/projects/` | Project card images |
| `public/resume/` | CV download |

## Brand palette

| Token | Hex | Use |
| --- | --- | --- |
| `--bg-base` | `#0C0C0C` | Page background |
| `--surface` | `#1A1A1A` | Cards, nav |
| `--surface-alt` | `#252525` | Popovers, inputs |
| `--border-strong` | `#2E2E2E` | Borders |
| `--accent` | `#3A5A40` | Primary accent |
| `--accent-hover` | `#4E7A56` | Hover accent |
| `--text-primary` | `#E8E0D0` | Headings, body |
| `--text-secondary` | `#A8A090` | Supporting copy |
| `--text-muted` | `#5A5248` | Muted labels |
| `--text-accent` | `#90C0A0` | Links, highlights |

Defined in `app/globals.css`.

## Related docs

| Doc | Purpose |
| --- | --- |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Branch workflow, PR checklist, code standards |
| [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) | Community standards |
| [SECURITY.md](./SECURITY.md) | Vulnerability reporting |
| [LICENSE](./LICENSE) | MIT license |

Pull requests run [CI](./.github/workflows/ci.yml) on `lint` and `build`.
