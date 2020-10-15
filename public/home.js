$(function () {
    var socket = io("https://loctoannam.herokuapp.com/")
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
    url:"/api/getall",
    type:"get"
  })
  .then(data=>{
    if(data!="loi getall roi"){
      for (const ele of data){$("#list").append(`<li><img src="/public/${ele.image}" alt="">${ele.rfid},,,,,,,,,,,,,${ele.carPlate}</li>`)}
      
    }
  })