---
order: 6
title: "Spanish Conjugation API"
links: [
    {
        text: "Source Code",
        url: "https://github.com/william-murphy/spanish-conjugation-api"
    },
    {
        text: "Demo",
        url: "http://spanish-conjugator.offthegully.com"
    }
]
---
Spanish Conjugation API is a backend service for conjugating Spanish verbs. It is written in Go using the Chi routing library. It can be used by making an API request to the server its running on in the form of `/verb/tense/mood/subject`, where the different segments of the route are filled in with the desired Spanish verb/tense/mood/subject. I used Docker to containerize the service. In building this API, it helped me learn new Spanish grammar tenses and reinforce other topics, especially irregular verb conjugations. Check the links above for a demo to the tool.