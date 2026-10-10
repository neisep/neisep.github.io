# www.neisep.com

Portfolio site built with [Hugo](https://gohugo.io/) and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## How release news works

Each project's tag pipeline (`v*`) publishes a GitHub Release whose notes come from `.github/scripts/changelog.sh`.
This site rebuilds every hour (also on push and manual run). At build time `content/news/_content.gotmpl` fetches
`https://api.github.com/repos/<repo>/releases` for every project in `data/projects.yaml` and turns each published
release into a news page with its changelog and download links.

## Add a project

1. Add an entry to `data/projects.yaml` (`private: true` hides the source link and downloads).
2. Add `content/projects/<slug>.md` with the description, and optionally a screenshot in `static/img/projects/`.
3. Give the project a release workflow that runs `changelog.sh`. Copy it from one of the existing projects.

## Local development

```sh
HUGO_GITHUB_TOKEN=$(gh auth token) hugo server
```

Without a token the build still works, but private repos are skipped and the API rate limit is lower.

## One-time setup

- Settings → Pages → Source: **GitHub Actions**.
- Optional secret `RELEASES_READ_TOKEN`: a fine-grained PAT with read-only *Contents* access to private project
  repos (MdNotes). Without it, only public repos' releases appear.
