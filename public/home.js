$(function () {
  var socket = io("http://localhost:3001/")
  socket.on('connected', (msg) => {
    console.log(msg.msg)
  });
  socket.on('vitriread', (msg) => {
    console.log(msg)
    for (var i = 0; i < msg.message.length; i++) {
      var a = "#p" + (i + 1)
      if (msg.message.charAt(i) == 0) {
        $(a).css("color", "red")
      }
      else {
        $(a).css("color", "green")
      }
    }
  });
});
$.ajax({
  url: "/api/getall",
  type: "get"
})
  .then(data => {
    if (data != "loi getall roi") {
      if (data.length > 0) { for (const ele of data) { 
        $("#list").append(`<li>
      <div class="ele">
        <img src="/public/123456" alt="" /><span>${ele.rfid}</span
        ><span>${ele.carPlate}</span><span>${ele.carIn.slice(16, 24)}</span><span>${ele.carIn.slice(0, 15)}</span>
      </div>
    </li>`) } }
      else{
        $("#list").html('khong co xe')
      }
    }
  })