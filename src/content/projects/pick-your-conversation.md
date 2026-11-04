---
title: Pick your conversation
short: Pick your conversation
kind: Group project course, Linköping University, in progress
year: "2026"
order: 8
tile: /images/projects/tile-pick.webp
tileAlt: Comic-style illustration of a phone on a table, with sound rising from it and splitting into separate coloured ribbons
summary: A phone on a table that separates several conversations happening at once, to help people with hearing loss follow the one they choose. I own speaker diarization and separation.
image: /images/projects/pick-pipeline.webp
imageAlt: Diagram of the audio pipeline from one phone, with diarize, match, extract and gate marked as my part
imageFit: contain
results:
  - figure: "34% → 17%"
    text: Diarization error rate on simulated test tables, after fine-tuning and using each person's voice sample.
  - figure: "2,000"
    text: Simulated table sessions I built to train on.
stack: [Python, pyannote, PyTorch, FastAPI]
---

In a busy room, several people talk at the same time. This group project puts one phone on the table to work out who is speaking, separate the voices, and transcribe the conversations for hearing-impaired listeners.

## My part

My teammates handle capture, transcription, conversation tracking and the interface. I own two steps:

- **Speaker diarization:** working out who spoke when.
- **Speaker separation:** extracting the voice of an enrolled speaker from the mix.

## The approach so far

I fine-tune pretrained models instead of training from scratch, starting from pyannote. The pipeline runs in order: diarize, match voices to enrolled names, extract each speaker, then gate. It starts offline, measured with DER and SI-SDR. Streaming comes later.

The build journal has the details: the simulated tables, the fine-tuning, and a demo page. All results so far come from simulated tables, not real recordings. The project is still running.
