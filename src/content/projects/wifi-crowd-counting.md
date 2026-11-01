---
title: Counting people with WiFi signals
short: WiFi crowd count
kind: Bachelor thesis, Amrita Vishwa Vidyapeetham
year: "2023"
order: 11
tile: /images/projects/tile-wifi.webp
tileAlt: Comic-style illustration of WiFi waves spreading from a circuit board through a room of people in silhouette
summary: A privacy-friendly way to count people in a room using WiFi Channel State Information instead of cameras. Phase-rotation augmentation took an LSTM from 49% to 67% accuracy.
image: /images/projects/wifi-method.webp
imageAlt: Diagram of the method, from WiFi signals in two rooms through ESP32 capture, augmentation and model comparison to a people count
imageFit: contain
results:
  - figure: "67%"
    text: Accuracy of the best model, an LSTM, up from 49%.
  - figure: "2"
    text: ESP32 modules capturing CSI across two rooms, at 2.4 and 5 GHz.
  - figure: "3"
    text: Network types compared, including a complex-valued neural network.
stack: [Python, TensorFlow, ESP32, Signal processing]
---

Cameras can count people, but people do not like being filmed. WiFi signals change as bodies move through a room, and those changes can be measured.

## The setup

With a team of four, I captured Channel State Information (CSI) from two ESP32 modules in two rooms, on both the 2.4 GHz and 5 GHz bands.

## The models

We compared an ANN, an LSTM and a complex-valued neural network. The LSTM did best. Data was scarce, so we augmented it with jittering, rotation and interpolation, and checked that the augmented data still made sense using k-means and agglomerative clustering. **Phase-rotation augmentation** lifted the LSTM from **49% to 67%** accuracy.
