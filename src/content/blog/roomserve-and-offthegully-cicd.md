---
title: "Roomserve and Off The Gully CI/CD pipelines are Done"
published: 2023-10-22
---
After a lot of trial and error, I finally figured out how to set up the CI/CD pipelines I wanted for roomserve and this website.
The roomserve pipeline, which is a room reservation application backend I've been working on, uses Github Actions and Docker to spin up a test container and a database container, run tests, and report the outcome whenever there is a push to any branch. The pipeline is running on a DigitalOcean droplet.

The off-the-gully pipeline, which is this website, just deploys any changes to this website when I push to the main branch. This was also accomplished with Github Actions and Docker, and run on a DigitalOcean droplet.

I had a free trial of DigitalOcean that gives me $200 worth of computing for a month for free, after that, I'm not really sure what happens. I can't imagine the costs will be crazy, but if they are I may need to shutdown the CI/CD runners to save on computing costs, so that I can continue to host this website.

Yo aprendo espanol a nuevo por dos o tres meses, entonces yo quiero practicar a escribir. Para aprender y practicar, yo uso Duolingo, y a veces yo leo CNN en espanol, y a veces yo escucho a los podcasts en espanol. Mis amigos y yo hemos estado discutiendo un viaje a Espana y por eso yo quiero aprender espanol. Yo aprendi espanol por seis anos en la escuela secundaria, pero en la universidad yo no use nada de espanol asi que olvide la mayoria.