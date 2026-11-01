---
title: What wins an IPL match
short: IPL win factors
kind: Sports analytics project, Linköping University
year: "2026"
order: 3
tile: /images/projects/tile-ipl.webp
tileAlt: Illustration of a floodlit cricket stadium at night, with glowing lines tracing shots across the field
summary: A real-time insights system built on ball-by-ball IPL data. It tracks win probability, finds which phases decide a match, and recommends who should bat or bowl next.
image: /images/projects/ipl-chart.webp
imageAlt: Chart from the project report comparing which model extensions improved held-out log-likelihood on the 2026 season
imageFit: contain
results:
  - figure: "1,128"
    text: IPL matches from 2007/08 to 2025 in the main dataset, across 58 venues.
  - figure: "3–5"
    text: Match phases learned for each venue, instead of one fixed split.
stack: [Python, XGBoost, PyTorch]
---

The idea behind this project is simple. A T20 innings breaks into phases, and the team that wins more phases tends to win the match. When the phases split evenly, single events decide it: a boundary, a wicket, a tight over.

## What I built

- **Win probability** for every ball, tested on the 2026 season, which the model never saw in training.
- **Data-driven phases.** Instead of a fixed three-phase split, the system learns 3 to 5 phases per venue from shifts in scoring and wicket rates.
- **Player impact,** measured as the win-probability swing each player was responsible for.
- **Recommendations.** Rankers suggest who should come in to bat or bowl next, respecting rules like the four-over limit.
- **A match replay dashboard** with a live recommendation panel that updates ball by ball.

## Testing it honestly

I checked each extension against a baseline on held-out data, and several did not help. The chart above shows which ones improved the model and which made it worse. In the win-probability test on the 2026 season, a simpler baseline did as well as my XGBoost model.
