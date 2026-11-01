---
title: Finding software needs in Reddit
short: Reddit needs
kind: Text mining project, Linköping University
year: "2026"
order: 9
tile: /images/projects/tile-reddit.webp
tileAlt: Comic-style illustration of a magnifying glass pulling a few glowing speech bubbles out of a dark crowd of them
summary: A three-stage NLP pipeline that sifts about 4,300 Reddit posts and comments for real software needs, separating solvable workflow problems from general venting.
image: /images/projects/text-mining-chart.webp
imageAlt: Chart from the project report showing discussion volume per topic, with the few validated opportunities highlighted among the noise
imageFit: contain
results:
  - figure: "4,279"
    text: Documents scraped across 10 subreddits.
  - figure: "38"
    text: Topic clusters found, without setting the number in advance.
  - figure: "4"
    text: Clusters that passed the final check as real opportunities.
stack: [Python, RoBERTa, BERTopic, Sentence Transformers, Qwen, NLTK]
---

Complaints about high rent and complaints about bad data-entry software sound equally angry, so sentiment analysis cannot tell them apart. Only one of them can be solved with software. This project looks for that difference.

## The pipeline

1. **Filter.** A zero-shot RoBERTa classifier removes obvious noise like personal venting.
2. **Cluster.** BERTopic groups what remains into topics, with no fixed number of clusters.
3. **Verify.** A small quantized LLM reads each cluster's keywords and sample posts, then decides whether it is a solvable problem or just noise.

## What it found

The largest clusters were about money and relationships, and the LLM rejected them despite their strong negative tone. Smaller clusters passed, such as marketing teams losing time on client reporting, and the manual checking AI-written text still needs.

## Limits

The first filter is modest, with an F1 of 0.62 on a small hand-labelled sample. Reddit also leans towards complaints, and a small LLM can hallucinate, so I would treat its verdicts as leads to check.
