# Kasun Rajapaksha — QA Engineer Portfolio

A modern, dark-themed, single-page portfolio website built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step — just open `index.html` in a browser.

## Structure

```
kasun-portfolio/
├── index.html        # All page sections
├── css/style.css     # Dark theme, responsive layout, animations
├── js/main.js        # Typing effect, scroll reveal, counters, mobile nav, contact form
└── assets/           # Favicon, resume, photos
```

## Before publishing — things to customize

Search for `TODO` in `index.html` and replace the placeholders:

1. **GitHub profile URL** — hero social icons and footer (`index.html`). Currently points to `https://github.com/`.
2. **Resume** — add your resume PDF as `assets/resume.pdf` (the "Download Resume" button links to it).
3. **Open Graph URL** — update the `og:url` meta tag in `index.html` once you know your final site URL.

Already configured: profile photo (`assets/profile.png`), email (`rajapaksha.deeptha@gmail.com`), and phone (`+94 71 199 6674`).

Optional tweaks:

- **Accent colors** — edit `--accent` and `--accent-2` at the top of `css/style.css`.
- **Typing phrases** — edit the `phrases` array in `js/main.js`.
- **Skill levels** — edit the `--level` percentages on the skill bars in `index.html`.

## Run locally

Just open the file:

```bash
open index.html
```

Or serve it (avoids any browser restrictions on local files):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages (free)

1. Create a new repository on GitHub named `<your-username>.github.io` (for a root URL) or any name like `portfolio` (URL will be `<your-username>.github.io/portfolio`).

2. Push this folder to the repository:

```bash
cd kasun-portfolio
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. On GitHub: open the repository → **Settings** → **Pages** → under "Build and deployment", set **Source** to "Deploy from a branch", choose branch `main` and folder `/ (root)`, then save.

4. Wait a minute or two. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

Any future change is deployed automatically when you push to `main`.

## Alternative free hosting

- **Netlify** — drag and drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel** — `npx vercel` from the project folder
- **Cloudflare Pages** — connect the GitHub repository
