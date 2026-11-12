# Herdr Cheat Sheet & Key Trainer

Static pages (no build step), English / Deutsch switchable:

- `index.html` – keyboard cheat sheet for [Herdr](https://herdr.dev) (default keybindings, filterable)
- `game.html` – small trainer game: an action is shown, you press the shortcut (`Ctrl+B`, then the key)

Shortcut data lives in one place: `assets/keys.js` (used by both pages, with EN/DE texts).

## Run locally

```bash
npm start            # or: python3 -m http.server 8000
```

Then open <http://localhost:8000> (cheat sheet) and <http://localhost:8000/game.html> (game).

## Publish to GitHub Pages (manual)

1. Create the repo, see [create-repo.md](create-repo.md).
2. Repo → Settings → Pages → Source: **GitHub Actions** (one time).
3. Actions tab → **Publish to GitHub Pages** → *Run workflow*.

The workflow only runs on manual trigger (`workflow_dispatch`).

## Notes

- Only default keybindings that have a default value are listed; unset ones are omitted. Check yours with `herdr --default-config`.
- In the game, browsers may intercept `Ctrl+B` in rare cases; the page calls `preventDefault`, which works in current Chrome/Firefox.
