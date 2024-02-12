---
order: 3
title: "Roomserve"
links: [
    {
        text: "Source Code",
        url: "https://github.com/william-murphy/roomserve"
    }
]
---
Roomserve is a backend API + database for a room reservation system. The API is written in Go using the Chi library for routing and the database is PostgreSQL. The main purpose of this project for me was to learn Go. It has some tests written with the Go testing library, and I created a pipeline using Github Actions that runs the tests on any push and succeeds / fails based on the outcome of the tests. The tests are run in one docker container and a postgres instance is spun up in a seperate container, and the runner for the pipeline resides on a DigitalOcean droplet. I still want to build a frontend for the room reservation system. The backend features user authentication with JWTs, administrator-specific endpoints for system configuration, and CRUD operations for buildings, floors, rooms, and reservations. The API is deployed using Docker and I also set up a testing pipeline in Jenkins for it.