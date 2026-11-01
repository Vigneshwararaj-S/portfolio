---
title: My local AI assistant
short: Local assistant
kind: Personal project, ongoing
year: "2026"
order: 1
tileCharm: true
summary: A local AI assistant on a 4 GB laptop GPU. It talks to tools through MCP servers I wrote, so it can read files, open apps and search the web without sending my data to the cloud.
image: /images/projects/assistant-session.webp
imageAlt: A real session with the assistant in a terminal, calling tools to get the time and list the files in a folder
imageFit: contain
results:
  - figure: "4 GB"
    text: Runs on an RTX 3050 laptop GPU, so the model has to be 3–4B parameters and 4-bit.
  - figure: "9 / 9"
    text: Clean multi-tool chains with Qwen2.5-3B through Ollama in my test runs.
  - figure: "4"
    text: MCP servers so far, for time, files, apps and the web.
repo: https://github.com/Vigneshwararaj-S/Assistant
stack: [Python, MCP, Ollama, Qwen2.5-3B, Hugging Face Transformers, SearXNG, Docker]
---

I wanted an assistant I could use every day, like a PA, that keeps my files and habits on my own machine. So I am building one from the ground up and writing about each step.

## How it works

A small language model runs locally, through Ollama or Hugging Face Transformers. It does not do the work itself. It decides which **tool** to call, and the tools live in separate MCP servers that I wrote:

- **Time:** the current date and time, so the model stops guessing what year it is.
- **Files:** list, read, write and delete files inside one folder it is allowed to touch.
- **Apps:** see what is running, and open or close a short list of allowed apps.
- **Web:** fetch a page as plain text, and search through my own SearXNG instance.

Anything that changes my computer, like writing a file or closing an app, stops and asks me first.

## What I learned

- **Small models need the right format.** Phi-3.5 has no built-in tool calling, so I had to describe the tools in the prompt and parse its replies. Qwen2.5-3B has native tool calling, and switching to it fixed most failures.
- **Test the real flow, not just one turn.** A bug only showed up once a tool call was already in the conversation history.
- **Check the operating system, not the exit code.** Windows Calculator ignores a normal close request but still reports success, so my tool now checks that the app is really gone.

## What is next

A voice interface with local speech-to-text and text-to-speech, and a desktop app built with Tauri and React. Its character is a lemon-and-chilli charm, the kind that hangs in front of shops in India to keep bad luck away.

![My design for the assistant's character, a lemon-and-chilli charm on a thread](/images/projects/assistant-charm.webp)
