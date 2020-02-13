// app/server.ts
import app from "./app";
// const port = process.env.PORT || 3000;
var server = app.listen(3000);

let express = require('express')();
 let  io = require('socket.io').listen(server);
