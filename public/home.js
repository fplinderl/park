$(function () {
  var socket = io("https://loctoannam.herokuapp.com/");
  socket.on("connected", (msg) => {
    console.log(11111111111111111111111);
  });
  socket.on("vitriread", (msg) => {
    for (var i = 0; i < msg.message.length; i++) {
      var a = "#p" + (i + 1);
      if (msg.message.charAt(i) == 0) {
        $(a).css("color", "red");
      } else {
        $(a).css("color", "green");
      }
    }
  });
  function sendTime() {
    console.log(1)
    socket.emit("atime", { time: new Date().toJSON() });
  }
  $("#button").click(function() {
    console.log(1)
    socket.emit('arduino' ,"Hello World!");
})
});
$.ajax({
  url: "/api/getall",
  type: "get",
}).then((data) => {
  if (data != "loi getall roi") {
    if (data.length == 4) {
      alert("Bãi đã hết chỗ trống");
    }
    if (data.length > 0) {
      for (const ele of data) {
        $("#list").append(`
      <div class="card mb-3 col-6" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="/public/${
        ele.image
      }.jpg" class="card-img" alt="ảnh đã bị server xóa">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${ele.carIn.slice(0, 15)}</h5>
        <p class="card-text">Biển số xe: <span>${
          ele.carPlate
        }</span><p>Vào bến lúc : <span>${ele.carIn.slice(16, 24)}</span></p></p>
        <p class="card-text"><small class="text-muted">${ele.rfid}</small></p>
      </div>
    </div>
  </div>
</div>`);
      }
    } else {
      $("#list").html("Bãi không có xe");
    }
  }
});
