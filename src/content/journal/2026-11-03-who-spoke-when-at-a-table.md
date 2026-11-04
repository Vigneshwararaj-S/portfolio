---
title: Who spoke when at a busy table
date: 2026-11-03
project: pick-your-conversation
summary: A diarization model built for one conversation got 34% of the speech time wrong at a table with two at once. Fine-tuning on simulated tables and using each person's voice sample brought that down to 17%.
---

In this project, one phone lies on a table where several conversations happen at the same time. My part is diarization: working out who spoke when, and which enrolled person each voice belongs to. The rest of the system needs that before it can separate and transcribe anyone.

![The demo page for my component on one simulated four-person table: the scores, and a timeline of who spoke when against the truth](/images/journal-diarization-demo.webp)

## The problem

I started from pyannote's pretrained diarization pipeline. It expects one conversation. On my small test tables, with two conversations at once, it got 48% of the speech time wrong. Its segmentation model also allows only three speakers in any 10 seconds, and a table has more.

## Simulated tables

There is no labelled data for this setting, so I built some. I mixed LibriSpeech recordings into tables of people in two conversations at once, with simulated room echo and noise: 2,000 sessions to train on, plus 50 for tuning and 50 for testing. The build uses fixed seeds, so anyone can recreate the same sessions.

## Fine-tuning

I rebuilt the segmentation model's output layer for four speakers and fine-tuned it on those tables. On the test sessions, the share of speech time with an error (the diarization error rate, DER) fell from **34.4% to 23.7%**.

That exposed a bug. pyannote only builds a speaker's voice profile from a 10-second chunk where that speaker talks alone for at least 2 seconds. With two conversations at once, almost no chunk qualifies, so the clustering step crashed. I made that threshold a setting and tuned it on the separate tuning sessions.

## Using the voice samples

Most of the remaining error was confusion: the right speech given to the wrong person. Everyone at the table records a short voice sample first, so I used those. Each stretch of speech now goes to the enrolled person it sounds most like, and each person's voice profile is refined from the speech they were given. I adapted this from an earlier experiment script and built it into the pipeline.

On the test sessions, confusion fell from 14.5% to 7.9%, and DER fell from **23.7% to 17.1%**. On tables of two to six people that the model never trained on, DER fell from 40.2% to 31.3%.

## The demo page

I added a small HTTP API so the other parts of the system can send a recording and get back who spoke when. It comes with the demo page in the picture above. You pick a test session, and it shows the predicted timeline against the truth. On that four-person session, DER was 19.3%, and every speaker was given the right name.

The separation gain on the page, +5.8 dB, comes from a pretrained third-party extraction model that I have not trained yet.

## What this does not show yet

All of these numbers come from simulated tables. Real rooms have more noise, people talking over each other in less regular ways, and microphones that are not ideal. Testing on real recordings is the next step, along with training a dedicated extraction model.
