---
order: 7
title: "Photoguessr"
links: [
    {
        text: "photoguessr.co",
        url: "https://photoguessr.co"
    }
]
---
This project is done in collaboration with another developer. It consists of 3 parts: frontend, api, and image fetcher. The concept is a daily puzzle game like [Wordle](https://www.nytimes.com/games/wordle/index.html) where you are given 4 images in a grid, 3 of the images are AI generated and 1 image is not. The goal is to guess the image that is not AI generated. The frontend handles the user interaction. The API facilitates communication with the database and image store, and the image fetcher retrieves real images, generates AI images based on the real image, and sends them to the API. For the frontend we chose to use Next.js and hosted it on an AWS EC2 instance. For the API, it is written in Golang and is packaged as serverless Lambda functions on AWS. The image fetcher is written in Golang and is run locally whenever a new batch of images is needed. We experimented with a few different AI image generators, such as OpenAI's Dalle, Stability.io's Stable Diffusion V1, and Stability.io's Stable Diffusion V3.