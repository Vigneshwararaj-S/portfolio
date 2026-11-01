---
title: Teaching a 3B model to call tools
date: 2026-09-21
project: local-assistant
summary: Phi-3.5 has no built-in tool calling, so I had to fake it with prompts. Qwen2.5-3B has it natively, and the difference was 0 out of 6 against 6 out of 6.
---

This week my assistant got its first real tool, served by an MCP server I wrote: it can ask for the current date and time. That sounds trivial. Getting a 3–4B model to use it reliably was not.

## Faking tool calls with Phi-3.5

Phi-3.5-mini has **no official tool-calling support**. So I described the tool in the system prompt and asked the model to reply with a block like `<tool_call>{"name": ..., "arguments": ...}</tool_call>`, which my code then parses.

It worked, with some fixes:

- Phi repeated the tool-call block at the start of its next answer, so I stop generation at the closing tag and drop the echo.
- The wording of the tool result mattered a lot. A raw `{'result': ...}` gave a usable answer about **3 times in 6**. The plain value plus "This is real, current data, use it to answer" gave **6 in 6**.

## Trying Qwen2.5-3B

Qwen has native tool calling in its chat template. With my hand-written Phi prompt it was useless: **0 of 6** tool calls. With its own template, passing the tool schemas from MCP and returning results as `role: "tool"`, it got **6 of 6**, and it answered normal questions without calling tools it did not need.

## What I changed

Instead of hard-coding one model, the chat loop now checks at startup whether the tokenizer's template actually renders tools. If it does, it uses the native path. If not, it falls back to the prompt-engineered one. Qwen is now the default.

## What I learned

Test the real multi-turn flow. One problem only appeared once a tool call was already in the history: Qwen sometimes questioned an unrelated follow-up before still answering it correctly. Single-turn tests never showed that.
