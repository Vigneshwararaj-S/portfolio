---
title: Two years building at NielsenIQ
short: NielsenIQ
kind: Software Engineer, Platform API, NielsenIQ
year: 2023–2025
order: 12
tile: /images/projects/tile-niq.webp
tileAlt: Comic-style illustration of supermarket shelves whose products turn into branching lines of data
summary: I developed features for the Discover application, and worked on proofs of concept and R&D, including integrating LLMs into Discover. One engine I built cut ticket resolution from 2 days to real time.
image: /images/projects/niq-engine.webp
imageAlt: Diagram comparing manual SQL taking 2 days with the recursive engine resolving nested hierarchies in real time
imageFit: contain
results:
  - figure: "2 days → live"
    text: Ticket resolution time after the Recursive Dynamic Chars Engine.
  - figure: "40%"
    text: Lower data retrieval latency from a partial caching layer.
  - figure: "60 → 86%"
    text: Test coverage on complex backend logic.
stack: [Java, Python, TensorFlow, SQL, JUnit]
---

From July 2023 to July 2025 I worked as a software engineer on NielsenIQ's Platform API team in Chennai. My work had two sides: building features for a product, and exploring what could come next.

## Features for Discover

I developed features for the Discover application, including:

- **Recursive Dynamic Chars Engine.** Backend logic in the Dimensional Metadata Service and Data Factory that resolves nested product hierarchies on its own. It replaced manual SQL work and cut ticket resolution from **2 days to real time**.
- **Partial caching.** A caching layer based on payload fragmentation and hashing that cut data retrieval latency by **40%**.
- **Testing.** With other engineers, I extended the JUnit suites for complex backend logic and raised coverage from **60% to 86%**.
- **Infrastructure automation.** I co-developed a maintenance scheduler that triggers jobs from live container usage.

## R&D and proofs of concept

I also worked on research and proofs of concept, delivered in 2-week sprints from idea to stakeholder demo:

- **LLMs in Discover.** I worked on integrating LLMs into the Discover application.
- **Smart Select NLU engine.** A Python and TensorFlow engine that maps natural-language queries onto complex data hierarchies, with context-aware handling of ambiguous queries.

## Recognition

1st prize and the Innovation Award at the NielsenIQ Global Hackfest in 2024, and the Rising Star Impact Award the same year.
