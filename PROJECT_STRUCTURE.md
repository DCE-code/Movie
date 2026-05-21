# Current and Recommended Project Structure

Current files

- Move.html
- Move.css
- Move.js
- data.json

Recommended structure

- css/
  - style.css        # move `Move.css` here (rename optional)
- js/
  - app.js           # move `Move.js` here (rename optional)
- data/
  - data.json
- index.html         # copy or rename `Move.html` to `index.html`

Why reorganize
- Easier to maintain and reason about assets.
- Ready for simple static hosting (GitHub Pages, Netlify).

Quick PowerShell commands to reorganize (run from the project folder):

```powershell
mkdir css,js,data
move Move.css css\style.css
move Move.js js\app.js
move data.json data\data.json
ren Move.html index.html
```

After moving files
- Update asset references inside the HTML to the new paths (e.g., `css/style.css`, `js/app.js`, `data/data.json`).

If you want, I can perform the reorganization automatically and update `Move.html` references—tell me to proceed.
