import http from 'http';

const server = http.createServer((req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Request-Method', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    // res.setHeader('Access-Control-Allow-Headers', '*');

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({message: 'Hello World!'}));
    res.end();
});



server.listen(3000, () => console.log('Listen server'));
