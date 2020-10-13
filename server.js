const express = require("express")
const path = require("path")
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'home.html'));
});
http.listen(process.env.PORT||3000, () => {});
app.use('/public',express.static(path.join(__dirname,'public')))
io.on('connection', (socket) => {
    io.emit('connected', {"msg":"connected"});
    socket.on('vitri',msg=>{
        socket.broadcast.emit('vitriread', msg);
    })
  });