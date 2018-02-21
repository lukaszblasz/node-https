const express = require('express');
const fs = require('fs');
const https = require('https');

const port = '3001';
const options = {
    key: fs.readFileSync(__dirname +'/key.pem'),
    cert: fs.readFileSync(__dirname + '/cert.pem'),
    passphrase: '123456'
}

const app = express();
const server = https.createServer(options, app).listen(port, '127.0.0.1', () => console.log('Example app listening on port 3001!'));


//app.set('port', port);
//app.listen(app.get('port'), ()=>{
//	console.log('server is listening on port 3001');
//});

app.post('/registerEndpoint', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); 
    res.setHeader('Access-Control-Allow-Credentials', true); 
    res.json({
        status: 'ok'
    });
});

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('ok');
});
