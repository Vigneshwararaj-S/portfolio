---
title: A robot that gives people room
short: Human-aware robot
kind: AI robotics course project, Linköping University
year: "2026"
order: 6
tile: /images/projects/tile-robot.webp
tileAlt: The robot in my simulated office in RViz, with the costmap's personal-space field around a person
summary: A simulated TurtleBot4 that keeps a safer distance from people. I wrote a custom Nav2 costmap layer in C++ and trained a Soft Actor-Critic agent to adapt its personal-space settings as it moves.
image: /images/projects/robot-architecture.webp
imageAlt: System diagram from the project report, from the semantic sensor through the human tracker and social costmap layer to Nav2 and the robot, with the SAC agent setting the proxemic distances
imageFit: contain
results:
  - figure: "0%"
    text: Collisions with people, down from 20% for the hand-tuned baseline.
  - figure: "0.92 m"
    text: Mean minimum distance to a person, up from 0.58 m.
  - figure: "50%"
    text: Goals reached, the same as the baseline, so safety did not cost throughput.
  - figure: "4"
    text: Rounds of reward design to get there.
stack: [C++, Python, ROS 2, Nav2, Stable-Baselines3, Soft Actor-Critic]
---

A robot that only avoids obstacles treats a person like a box. People expect more room than that. I tested this in a simulated office with twelve walking people.

## Phase 1: a costmap layer that knows about people

I wrote a custom Nav2 costmap layer in C++. It paints a cost field around each tracked person, following the intimate, personal and social zones from proxemics. This hand-tuned version was the baseline.

## Phase 2: learning the distances

A Soft Actor-Critic agent then adjusts those three distances every half second, instead of using fixed values. Because it changes the costmap and not the controller, the approach works with any local controller.

## Four rounds of reward design

- **Version 1:** the agent inflated the personal space until no path existed, and it reached no goals.
- **Version 2:** tighter limits led to an aggressive policy that squeezed past people.
- **Version 3:** a social force term removed collisions, but goal completion stayed low.
- **Version 4:** placing a local goal 2 m ahead on the planned path brought goal completion level with the baseline.

## What else I found

Swapping the local controller mattered more than any reward change. With the same settings, moving from Regulated Pure Pursuit to DWB raised the minimum distance from 0.62 m to 1.12 m.

## Limits

Each setup ran for only 10 episodes, so small differences are not reliable. The collision and distance gains stand out, but this is not proof at scale. Training was limited to about 3,000 steps on a CPU, and the simulator could not reset between episodes, which made training unstable.
