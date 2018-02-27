## Vanilla HTTP Servers - Cowsay Edition

This app creates a vanilla HTTP server from scratch. It uses the http, querystring, and url native node modules, and has the cowsay node module installed as a dependency. The app also has a custom middleware file called parse-body.js which parses the body of requests made to the server. This server handles GET, POST, and PUT routes.

In order to use this app, start up your server by typing ``` node server.js ``` or ``` npm run start ``` in the terminal. You should receive a ``` "server up: ${PORT}" ``` message with your port number from the terminal.

### GET requests

Two types of GET requests can be made to this server.

__Requests to ```/```__

To make a request to ```/```, in the terminal, type:

```
http :3000
```

When a request to ```/``` is made, the server will respond with a status of __200__ and a response with the string "hello from my server!"

__Requests to ```/cowsay?text={message}```__

To make a request to ```/cowsay?text={message}```, in the terminal, type:
```
http :3000/cowsay?text={message}
```
or
```
http :3000/cowsay text=='message'
```
with your custom message. This will return an ascii cow with your message!

- Note: If the message is not set, the server will response with a status of __400__ and an ascii cow with the message 'bad request'.

### POST / PUT Requests

__Requests to ```/cowsay?text={message}```__

To make a POST or PUT request to ```/cowsay?text={message}```, in the terminal, type:
```
http :3000/cowsay?text={message}
```
or
```
http :3000/cowsay text=='message'
```
with your custom message. This will return an ascii cow with your message!

- Note: If the message is not set, the server will response with a status of __400__ and an ascii cow with the message 'bad request'.