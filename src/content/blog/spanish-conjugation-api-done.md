---
title: "Spanish Conjugation API Done"
published: 2024-02-11
---
After a few weeks of work, I have finished the Spanish Conjugation API project that I wrote my last blog post about. It ended up being pretty enjoyable, and I learned a lot about Spanish grammar and got to learn some more Go as well. I had to at least brush up on every irregular Spanish verb conjugation in the Spanish language. 

I containerized the application and its running on my DigitalOcean droplet, along with the http server that serves offthegully.com. On the droplet I now have set up an NGINX reverse proxy that directs www.offthegully.com and offthegully.com traffic to the http server and traffic to the subdomain spanish-conjugator.offthegully.com is directed to the Go application. I created a demo page for accessing the API [here](https://spanish-conjugator.offthegully.com), although really you can access the API from anywhere.

You will probably notice - the demo page looks terrible. I know, but it's late and I wanted to get it working tonight so I whipped up something fast. I also realized that I needed to serve the new offthegully icon separetely from the subdomain. Obviously this isn't ideal, and it isn't very DRY to have the same image served from two different locations. I bet there is a way to include the favicon somewhere in the NGINX reverse proxy to serve from any offthegully.com domain. It's something I'll look into along with polishing the demo page.

## Celtics

I realize I've never talked about the Celtics on here. I was very glad to see them beat the Miami Heat again today. Maybe during the all star break I will write a post about the Celtics season so far.

## Site Updates

I've also made some pretty big improvements to offthegully.com, which I'm happy about. I improved the look on mobile and smaller screens, I moved the blog posts to their own pages, and I cleaned up and refactored a bunch of the code.

