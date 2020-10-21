$(function () {
  var socket = io("https://loctoannam.herokuapp.com")
  socket.on('connected', (msg) => {
    console.log(msg.msg)
  });
  socket.on('vitriread', (msg) => {
    console.log(msg)
    var empty = 0
    for (var i = 0; i < msg.message.length; i++) {
      var a = "#p" + (i + 1)
      if (msg.message.charAt(i) == 1) {
        $(a).css("color", "red")
      }
      else {
        $(a).css("color", "green")
        empty++
      }
    }
    $("#empty").html(empty)
  });
});