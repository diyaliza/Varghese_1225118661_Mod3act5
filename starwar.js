import fetch from 'node-fetch';
const apiUrl = 'https://swapi.dev/api/people/42'
fetch(apiUrl)
    .then(res => res.json())
    .then(json => console.log(json));
console.log(`Getting data`)