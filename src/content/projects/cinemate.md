---
title: A social network for film lovers
short: Cinemate
kind: Group project with Shaurya Thakur, Linköping University
year: "2026"
order: 10
summary: A full-stack web app where people rate and review films and shows, keep watchlists, follow friends and talk in threads. Built as a two-person course project and deployed online.
image: /images/projects/cinemate.webp
imageAlt: The Cinemate landing page with the headline "Track films you've watched. Tell your friends what's good."
imageFit: contain
results: []
stack: [React, Tailwind CSS, Node.js, Express, PostgreSQL, JWT, TMDB API, Docker]
---

Cinemate lets users rate films and TV shows from one to five stars, write reviews, build a watchlist, follow friends, see their activity and discuss in threads.

## My part

We built it as a pair. My work included:

- **Docker setup** and configuration across environments.
- **Avatar uploads** through Cloudinary.
- **Features:** cults, notifications, authentication flows and search.
- **Deployment fixes.** Railway blocked SMTP, so I moved the mailer to Resend. I also swapped bcrypt for bcryptjs so the backend would build on Alpine.
