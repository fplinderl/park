$(function () {
  var socket = io("https://loctoannam.herokuapp.com/")
  socket.on('connected', (msg) => {
  });
  socket.on('vitriread', (msg) => {
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
      if(data.length ==4){
        alert("Bãi đã hết chỗ trống")
      }
      if (data.length > 0) { for (const ele of data) { 
        $("#list").append(`<li>
        <div class="ele">
          <img src="/public/${ele.image}.jpg" alt="ảnh đã bị server xóa" />
          <div class="text">
            <p>Mã thẻ: <span>${ele.rfid}</span></p>
          <p>Biển số xe: <span>${ele.carPlate}</span></p>
          <p>Vào bến lúc : <span>${ele.carIn.slice(16, 24)}</span></p>
          <p>Ngày : <span>${ele.carIn.slice(0, 15)}</span></p>
          </div>
        </div>
      </li>`) } }
      else{
        $("#list").html('Bãi không có xe')
      }
    }
  })