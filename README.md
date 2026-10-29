# portfolio-frontend

Personal portfolio site built with React, TypeScript, Vite and Tailwind CSS. It is styled like a small desktop: macOS-style windows, a taskbar, switchable color themes and a terminal-style chat prompt.

## Pages

| Route         | Page        | Description                                    |
| ------------- | ----------- | ---------------------------------------------- |
| `/`           | Home        | Profile, contact links and a pod overview      |
| `/experience` | Experience  | Work and education history                     |
| `/projects`   | Projects    | Project cards with descriptions and links      |
| `/chat`       | Chat        | Terminal-style prompt (under construction)     |
| `*`           | NotFound    | Fallback for unknown routes                    |

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vite.dev/) for dev server and builds
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [React Router 7](https://reactrouter.com/)
- ESLint with `typescript-eslint` and the React Hooks plugin

## Getting started

Requires Node.js 24 (the version used in the Docker build).

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

### Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR            |
| `npm run build`   | Type-check (`tsc -b`) and build to `dist/`    |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | Run ESLint                                    |

## Project structure

```
src/
├── components/   UI building blocks (Layout, Tabbed windows, Accordion, PodOverview, ...)
├── constants/    Themes, table data and page content (locales/experience.ts)
├── context/      ThemeContext: active theme, shared across the app
├── hooks/        Custom hooks (useScrollOverlap)
├── pages/        Route components
├── App.tsx       Router setup
└── main.tsx      Entry point
public/           Static assets: icons, images, GIFs
```

### Themes

Themes live in [src/constants/theme.ts](src/constants/theme.ts). Each theme is a set of Tailwind class names for background, text and chat colors. The built-in options are **Dark**, **Forest** and **Midnight**. To add one, define a new theme object and add it to `themeOptions`.

### Content

Most page text, including experience and project entries, is in [src/constants/locales/experience.ts](src/constants/locales/experience.ts). The pod list on the home page currently uses mock data in [PodOverview.tsx](src/components/PodOverview/PodOverview.tsx).

## Docker

The [Dockerfile](Dockerfile) builds the app with Node and serves `dist/` with nginx on port **8080**. The nginx config falls back to `index.html` so client-side routes work on reload.

```sh
docker build -t portfolio-frontend .
docker run --rm -p 8080:8080 portfolio-frontend
```

## CI/CD

[.github/workflows/build-and-push.yaml](.github/workflows/build-and-push.yaml) builds a multi-arch image (`linux/amd64`, `linux/arm64`) on every pull request and push to `main`. Pushes to `main` publish it to GitHub Container Registry:

```
ghcr.io/chris911e/portfolio-frontend:latest
ghcr.io/chris911e/portfolio-frontend:<commit-sha>
ghcr.io/chris911e/portfolio-frontend:<version>
```

The version tag comes from the [VERSION](VERSION) file, so bump it before merging a release.

## License

[MIT](LICENSE)
