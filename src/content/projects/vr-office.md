---
title: AI inside LibreOffice
short: VR Office
kind: Personal project
year: "2026"
order: 2
summary: A LibreOffice extension that rewrites text, writes Calc formulas and answers questions about your document, using a small model running on your own laptop.
image: /images/projects/vr-office.webp
imageAlt: The VR Office panel showing a grammar fix, with changed words highlighted and Apply and Undo buttons
imageFit: contain
results:
  - figure: "247"
    text: Automated tests across the service, the panel logic and the extension.
  - figure: "~80"
    text: Tokens per second from Qwen2.5-3B on a 4 GB laptop GPU.
stack: [Python, Python-UNO, FastAPI, Ollama, Qwen2.5-3B, JavaScript]
---

I use LibreOffice, and I wanted AI help inside it without sending my documents anywhere. So I built it as an extension, with no fork of LibreOffice itself.

## How it works

Three parts work together:

- **An extension** inside LibreOffice, written in Python-UNO, which reads the selection and applies changes.
- **A local service** built with FastAPI, which talks to the model through Ollama.
- **A side panel** with chat, rewrite, structure, formula and generate tools. You see a word-by-word comparison before you apply a change, and you can undo it.

## Narrow actions for a small model

The model is small because it has to fit in 4 GB of VRAM. So each action is narrow, and its output is checked before it reaches the document. I benchmarked two models on grammar, formulas and document questions. llama3.2 changed the meaning of a sentence while fixing it, so I kept Qwen2.5-3B, which fixed only the grammar.

## What was hard

LibreOffice draws its whole interface into one window, so its panels cannot host a normal web view. I made the panel a child window placed exactly over the sidebar, with a secured bridge so the page can read the selection and apply changes.
