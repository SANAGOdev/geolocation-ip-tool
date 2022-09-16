//Imports librairies
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

const figlet = require('figlet');

//Ascii text console
console.log(
    '\x1b[38;5;18m',
    figlet.textSync('Ip Geolocation tool', {
        font: 'ANSI Regular',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        color: 'blue',
        whitespaceBreak: true,
    }),
    '\x1b[38;5;27mby SANAGO#0001\x1b[38;5;79m'
);

//Application
readline.question('Entrez un domaine : >', (query) => {
    let url = `http://ip-api.com/json/${query}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(`\x1b[35m> Query : \x1b[33m${data.query}`);
            console.log(`\x1b[35m> Status : \x1b[33m${data.status}`);
            console.log(`\x1b[35m> Country : \x1b[33m${data.country}`);
            console.log(`\x1b[35m> Country Code : \x1b[33m${data.countryCode}`);
            console.log(`\x1b[35m> Region : \x1b[33m${data.regionName}`);
            console.log(`\x1b[35m> Region Code : \x1b[33m${data.region}`);
            console.log(`\x1b[35m> City : \x1b[33m${data.city}`);
            console.log(`\x1b[35m> Zip : \x1b[33m${data.zip}`);
            console.log(`\x1b[35m> Time Zone : \x1b[33m${data.timezone}`);
            console.log(`\x1b[35m> Latitude : \x1b[33m${data.lat}`);
            console.log(`\x1b[35m> Longitude : \x1b[33m${data.lon}`);
            console.log(`\x1b[35m> Isp : \x1b[33m${data.isp}`);
            console.log(`\x1b[35m> Org : \x1b[33m${data.org}`);
            console.log(`\x1b[35m> As : \x1b[33m${data.as}\x1b[32m`);
        })
        .catch((err) => console.log(`Erreur : ${err}`));
    readline.close();
});
