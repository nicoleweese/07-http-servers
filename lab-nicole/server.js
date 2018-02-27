'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);


  if (req.method === 'GET' && req.url.pathname === '/cowsay') {
    if (req.url.query.text === undefined) {
      res.writeHead(400, { 'Content-Type': 'text/plain'});
      res.write(cowsay.say({ text: 'bad request'}));
      res.end();
      return;
    }    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(cowsay.say({ text: req.url.query.text }));
    res.end();
    return;
  } 
  
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('hello from my server!');
    res.end();
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    parseBody(req, function (err, data) {
      if (err) throw new Error('error');
      
      if (data === undefined) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.write(cowsay.say({ text: 'bad request' }));
        res.end();
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(cowsay.say({ text: data.text }));
      res.end();
    });
  }
});


server.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});