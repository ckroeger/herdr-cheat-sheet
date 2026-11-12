# Herdr Cheat Sheet & Key Trainer

Static pages (no build step), English / Deutsch switchable, for **both** Herdr variants – pick one at the top of each page (remembered in the browser, or via `?v=cli` / `?v=app`):

| Variant       | What it is                              | Prefix                                |
| ------------- | --------------------------------------- | ------------------------------------- |
| **Herdr CLI** | the terminal tool (`herdr`), tmux-style | yes: `Ctrl+B`, then a key             |
| **Herdr App** | the desktop app (`herdr-app`)           | no: single chords like `Ctrl+Shift+O` |

Pages:

- `index.html` – cheat sheet (filterable)
- `game.html` – key trainer: an action is shown, you press the shortcut

Data lives in `assets/set-cli.js` and `assets/set-app.js` (shortcuts), `assets/strings.js` (EN/DE texts).

[![Publish to GitHub Pages](https://github.com/ckroeger/herdr-cheat-sheet/actions/workflows/pages.yml/badge.svg)](https://github.com/ckroeger/herdr-cheat-sheet/actions/workflows/pages.yml)

## Where the keybindings live on your system

### Herdr CLI (terminal)

- Show the full commented default config, including all `[keys]`: `herdr --default-config`
- In-app help: press `Ctrl+B`, then `?`
- Your config file: `~/.config/herdr/config.toml` on Linux/macOS (the docs only name the override env var `HERDR_CONFIG_PATH`; the default path is inferred). Keybindings are the `[keys]` section, e.g. `new_tab = "prefix+c"`, `prefix = "ctrl+b"`.
- Reload after editing: `Ctrl+B`, then `Shift+R`, or `herdr server reload-config`
- Docs: <https://herdr.dev> (configuration → keybindings)

### Herdr App (desktop)

- `~/.config/herdr-app/keys.json` (`HERDR_APP_HOME` picks another folder). Sections `global` and `terminal` map chords to commands, e.g. `"ctrl-tab": "tab.next"`.
- Show all available commands: `herdr-app commands`
- In the app: `Ctrl+?` opens the shortcuts overlay, `Ctrl+Shift+P` the command palette.
- The App cheat sheet here reflects the Linux defaults; if you edited `keys.json`, adjust `assets/set-app.js`.

## Run locally

```bash
npm start            # or: python3 -m http.server 8000
```

Open <http://localhost:8000> (cheat sheet) and <http://localhost:8000/game.html> (game).

## Publish to GitHub Pages (manual)

1. Create the repo, see [create-repo.md](create-repo.md).
2. Repo → Settings → Pages → Source: **GitHub Actions** (one time).
3. Actions tab → **Publish to GitHub Pages** → _Run workflow_.

The workflow only runs on manual trigger (`workflow_dispatch`).

## Notes

- Only bindings that have a default value are listed; unset ones are omitted.
- Browsers swallow some App chords (`Ctrl+Tab`, `Ctrl+Shift+N/T/W`, `Alt+1…9` …). In the game use **Fullscreen + key capture** (Chromium-based browsers, Keyboard Lock API); Firefox cannot capture all of them.
- `Alt+[` / `Alt+]` can't be typed with Alt on a German layout (`[`/`]` are on AltGr) – use Skip.
