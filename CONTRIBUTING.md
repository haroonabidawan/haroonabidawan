# Contributing

Thanks for your interest in this repository. This project is the source for [haroonabidawan.com](https://haroonabidawan.com), a public portfolio site under the Carbon Trail brand.

Maintainer-led does not mean closed. Issues, fixes, and thoughtful improvements are welcome when they follow the process below.

## Before you start

1. Read the [README](./README.md) for stack, branches, and local setup.
2. Check [open issues](https://github.com/haroonabidawan/haroonabidawan/issues) and [open pull requests](https://github.com/haroonabidawan/haroonabidawan/pulls) to avoid duplicate work.
3. For security concerns, do **not** open a public issue. See [SECURITY.md](./SECURITY.md).

## What we welcome

| Type | Examples |
| --- | --- |
| Bug fixes | Broken links, layout regressions, build failures |
| Accessibility | Focus order, contrast, semantic markup |
| Performance | Image loading, bundle size, Core Web Vitals |
| Documentation | README clarity, setup steps, typos |
| Copy suggestions | Open an issue first for tone and brand alignment |

Large feature work, rebranding, or content rewrites should start as an issue before you invest in a pull request.

## Branch workflow

This repo uses three deploy lanes. Direct pushes to protected branches are blocked.

| Branch | Purpose |
| --- | --- |
| `dev` | Daily development and experiments |
| `stage` | Pre-production review and Vercel preview |
| `production` | Live site at haroonabidawan.com |

```bash
git checkout dev
git pull origin dev
git checkout -b fix/your-topic
# make changes, commit, push
```

Open a pull request into `dev`. The maintainer promotes changes through `stage` and `production`.

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

## Pull request checklist

- [ ] Branch is based on `dev`, not `production` or `stage`
- [ ] `pnpm lint` passes
- [ ] `pnpm build` passes
- [ ] Changes are scoped to the stated problem
- [ ] Copy follows project voice: clear, direct, no filler phrases
- [ ] No em dashes in user-facing copy (see project content rules)
- [ ] Screenshots included for visible UI changes

## Commit messages

Use short, imperative subjects. One logical change per commit when possible.

```text
fix: correct mobile nav focus trap
docs: clarify branch promotion steps
chore: bump eslint-config-next
```

## Code and content standards

- **TypeScript**: avoid `any` and `unknown` unless there is a documented reason.
- **Package manager**: use `pnpm`, not npm or yarn.
- **Linting**: follow `eslint.config.mjs`.
- **Content**: portfolio copy lives in `lib/profile.ts`. Match existing tone and structure.
- **Brand**: respect the Carbon Trail palette and typography defined in `app/globals.css`.

## Review process

1. Open a PR with a clear description and the checklist above.
2. At least one approving review is required before merge into protected branches.
3. The maintainer may request changes or close PRs that fall outside project scope.

## Conduct

All participants are expected to follow the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Questions

For collaboration or project inquiries outside GitHub, use [haroonabidawan.com/contact](https://haroonabidawan.com/contact).
