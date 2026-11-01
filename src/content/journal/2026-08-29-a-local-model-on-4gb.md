---
title: A chat model in 4 GB of VRAM
date: 2026-08-29
project: local-assistant
summary: Step one of my local assistant. A 3.8B model, 4-bit quantisation, and a terminal chat loop that streams its answer.
---

I am building a personal assistant that runs entirely on my laptop. Step one is the boring but necessary part: get a language model talking in a terminal.

## The constraint

My laptop has an RTX 3050 with **4 GB of VRAM**. That rules out most models. Anything above about 3–4 billion parameters will not fit, even compressed.

## The choice

I picked **microsoft/Phi-3.5-mini-instruct** (3.8B parameters, MIT licence). I loaded it with Hugging Face Transformers and bitsandbytes in **4-bit NF4**, with bfloat16 for the maths. It loads on the GPU and leaves a little room for the conversation.

Qwen2.5-3B-Instruct was the other candidate. I chose Phi mostly out of curiosity. That choice came back to bite me later, in the tool-calling step.

## The chat loop

The loop itself is short:

1. Keep the conversation as a list of messages.
2. Turn it into the model's prompt format with the tokenizer's chat template.
3. Generate on a background thread and stream tokens to the terminal as they arrive, using `TextIteratorStreamer`.

Streaming matters more than I expected. A reply that appears word by word feels fast, even when the total time is the same.

## Next

The model can talk, but it cannot *do* anything yet. Next step: connect it to real tools through MCP.
