# Create the GitHub repo with the GitHub CLI

```bash
cd /home/ckroeger/git/ckr/herdr-cheat-sheet

# one-time login (skip if already logged in)
gh auth login
gh auth status

# commit locally
git add -A
git commit -m "Initial commit: Herdr cheat sheet and key trainer"

# create the remote repo and push (use --private if you prefer)
gh repo create herdr-cheat-sheet --public --source=. --remote=origin --push \
  --description "Herdr keyboard cheat sheet (EN/DE) and key trainer game"
```

## Enable GitHub Pages with Actions

```bash
gh api -X POST repos/:owner/herdr-cheat-sheet/pages -f build_type=workflow
```

(If it says Pages already exists, that's fine. Or: Settings → Pages → Source: GitHub Actions.)

## Publish manually

```bash
gh workflow run pages.yml
gh run watch
gh api repos/:owner/herdr-cheat-sheet/pages --jq .html_url   # site URL
```

Note: Pages on a *private* repo requires a paid GitHub plan.
