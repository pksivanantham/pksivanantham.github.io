Personal profile (GitHub Pages)

This repository publishes my personal profile page using GitHub Pages. The site is a simple static site with `index.html`, images and SCSS source files that are compiled to CSS.

Files of note
- `index.html` — main page
- `styles/index.scss` — primary Sass source
- `styles/index.processed.css` — compiled CSS (expanded)
- `styles/index.processed.min.css` — compiled CSS (compressed)
- `images/` — project images and assets

Prerequisites
- Node.js and npm (for `npx`) — https://nodejs.org/
- Optional: `sass` npm package for local compilation

Local build (Sass)
1. Install `sass` as a dev dependency (one-time):

```
npm install --save-dev sass
```

2. Compile expanded CSS:

```
npx sass styles/index.scss styles/index.processed.css
```

3. Compile compressed CSS with source map:

```
npx sass --style=compressed --source-map styles/index.scss:styles/index.processed.min.css
```

Preview locally
- Open `index.html` directly in your browser, or run a simple static server.

Example using Python 3 built-in server:

```
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deploy
- The repository is configured for GitHub Pages on the `master` branch. Push changes and GitHub Pages will publish the site.

