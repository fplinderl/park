$(function () {
    var socket = io("https://loctoannam.herokuapp.com/")
    socket.on('connected', (msg) => {
        console.log(msg)
    });
  });