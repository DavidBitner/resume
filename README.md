# David Bitner - Interactive Resumé

My main portfolio/resume page - a single-page interactive resume with sections for projects, about me, education, skills, and contact.

**Live demo:** https://davidbitner.github.io/resume/

## Features

- Fully bilingual (English/Portuguese), switchable via the flag button
- Featured projects grid, with a popup for each showing screenshots, highlights, and a link to the live project
- "Other Projects" modal for additional projects beyond the featured ones, loaded on demand
- Animated particle background (via particles.js) and a Ken Burns-style header background
- Downloadable CV/resume (PDF)
- Responsive layout with dedicated breakpoints for phone, tablet, and desktop

## Running locally

```bash
git clone https://github.com/DavidBitner/resume.git
cd resume
npm install
npm run build:css
```

Then open `index.html` in a browser, or serve it with any static file server.

To recompile the CSS automatically while editing Sass:

```bash
npm run watch:sass
```

## License

See [LICENSE](./LICENSE).
