$(function () {
  var socket = io("http://loctoannam.herokuapp.com/")
  socket.on('connected', (msg) => {
    console.log(msg.msg)
  });
  socket.on('vitriread', (msg) => {
    console.log(msg)
    var empty = 0
    for (var i = 0; i < msg.message.length; i++) {
      var a = "#p" + (i + 1)
      var b = a + "t"
      if (msg.message.charAt(i) == 1) {
        $(a).css("color", "red")
        $(b).html('Có xe')
      }
      else {
        $(a).css("color", "green")
        $(b).html('Không có xe')
        empty++
      }
    }
    $("#empty").html(empty)
  });
});