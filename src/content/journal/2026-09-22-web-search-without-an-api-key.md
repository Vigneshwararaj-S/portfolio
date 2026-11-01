---
title: Web search without an API key
date: 2026-09-22
project: local-assistant
summary: Bing's API is gone and Brave's free tier ended, so my assistant now searches through a SearXNG instance running in Docker on my own machine.
---

My assistant can now read files, open apps and fetch web pages. The missing piece was search: finding pages in the first place.

## The options

Before choosing, I checked current prices:

- The **Bing Search API** was retired in 2025.
- **Brave Search API** dropped its free tier in February 2026. It now costs $5 per 1,000 queries and needs a card.

For a personal assistant that runs locally, paying per query felt wrong. So I went with **SearXNG**, an open-source metasearch engine, running in Docker on my laptop.

## Two traps

1. **The JSON API is off by default**, even on your own instance. I had to add `search: formats: [html, json]` to `settings.yml` and restart the container.
2. **Git Bash rewrites Docker volume paths.** Running `docker run -v ...` from Git Bash quietly turned `/etc/searxng` into `/Program Files/Git/etc/searxng`. Docker commands on this machine now run from PowerShell.

## Keeping fetches safe

`fetch_url` refuses to load pages on my own machine or local network. It resolves the hostname and checks the real IP address, instead of matching text in the URL. Otherwise a web page could trick the model into probing my own computer with its next call.

## Proof it works

I asked about something from September 2026, after the model's training data ends. It answered with current search results. That means it really searched, instead of making something up.

The first four parts of the plan now work: chat, tool calling, files and apps, and the web. Next: a voice.
