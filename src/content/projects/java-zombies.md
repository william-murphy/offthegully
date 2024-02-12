---
order: 5
title: "Java Zombies"
links: [
    {
        text: "Source Code",
        url: "https://github.com/william-murphy/java-zombies"
    },
    {
        text: "Downloadable Jar",
        url: "https://github.com/william-murphy/java-zombies/tree/main/versions"
    }
]
---
This project is something I started work on a few months ago. I am going to tentatively call it a work in progress but I'm not sure if I'll ever get around to adding more features. It is a two-dimensional zombie survival game written in Java using only the standard library. It features two-dimensional top-down graphics, a tile based map system, entity / entity collision, entity / tile collision, and zombie pathfinding with the A* search algorithm. It requires Java >=19 to play. The jar file can be found on the github repo under `/versions`. The highest round I am aware of someone getting to is 14. There is an upper limit on the round you can achieve which I need to fix, because the rate at which you attain ammo stays the same but the rate at which zombies spawn increases exponentially.