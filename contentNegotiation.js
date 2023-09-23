import fetch from 'node-fetch'
var query = 'https://swapi.dev/api/people/1';
fetch(query, {
    method : 'GET',
    headers: {
        'Content-Type': 'application/xml',
        'accept': 'application/json',
        'User-Agent': '*'
    },
}).then(function(response){
    console.log(`response = ${response}`);
    return response.json();
}).then(function(xml){
    console.log(`JSON = ${JSON.stringify(xml)}`);
    let xmlString = '';

    for (const key in xml) {
        if (xml.hasOwnProperty(key)) {
            xmlString += `<${key}>${xml[key]}</${key}>`;
        }
    }
    console.log('\n');
    console.log(`<root>${xmlString}</root>`);
})
.catch((error) => {
    console.error('Error:', error);
});