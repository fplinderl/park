const express = require("express")
var ip = require('ip');
const path = require("path")
const control = require("./control");
const multer = require("multer");
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const upload = multer({ dest: "public" });
app.use('/public', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/api/getall', control.getall)
app.post("/api/uploadimage", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
}, upload.single("file"), control.image);
io.on('connection', (socket) => {
    io.emit('connected', { "msg": "connected" });
    socket.on('vitri', msg => {
        socket.broadcast.emit('vitriread', msg);
    })
});
http.listen(process.env.PORT || 3001, () => { });