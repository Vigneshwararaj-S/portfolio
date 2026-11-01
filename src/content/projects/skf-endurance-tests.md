---
title: A data and ML platform at SKF
short: SKF
kind: Summer job, machine learning and data engineering, SKF Vertevo
year: "2026"
order: 4
tile: /images/projects/tile-skf.webp
tileAlt: Close-up of a steel deep groove ball bearing with its balls visible
summary: I built a unified ingestion framework on Microsoft Fabric, a medallion architecture, an AI agent that writes its own file parsers, and a model that finds test failures.
image: /images/projects/skf-architecture.webp
imageAlt: Diagram of the data flow, from sources through the ingestion framework and parser agent to bronze, silver and gold layers, then the failure model and RAG layer
imageFit: contain
stack: [Python, PyTorch, Microsoft Fabric, Apache Spark, Delta Lake, Azure AI Foundry, Azure ML, Snowflake]
---

At SKF Vertevo in Gothenburg, I worked from raw data all the way to a working model. Each part feeds the next.

## A unified ingestion framework

I built a framework on Microsoft Fabric that works through pipelines and payloads. It is dynamic: you describe the data you want to ingest as metadata, and the framework brings it in. It handles structured, semi-structured and unstructured data from different sources, including SharePoint, Snowflake and Azure Data Lake Storage.

## A medallion architecture

On top of that, I built a medallion architecture with Spark and Delta tables. It transforms the data through increasing levels of quality, so that users and tasks further along can rely on it.

## An AI agent that writes parsers

Test rigs write files in formats that vary by machine and site, including Mandarin-language output. I built an agent on Azure AI Foundry that can parse any unstructured CSV file by writing its own parser. A fingerprinting step recognises the file type, so when the same type appears again, it reuses that parser. The agent only runs on new formats or failed parses.

## A model that finds test failures

Endurance tests run machines for a long time until they pass or fail. I analysed the multi-channel sensor data per time window and per channel, and found that **shaft speed and power carried a stronger failure signal than bearing temperature.**

There were only a few labelled runs, so I built a diffusion-based time-series encoder for anomaly detection, with a small classifier on top, to predict pass or fail.

## A RAG layer

I also designed a semantic model and a RAG system over the cleaned data, which puts image and text data in one vector space. Reports and a conversational data agent use it.
