var doitrang = function (x) {
    if (x === 1) {
        $('.content').css('background', 'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(https://giaphaco.com/wp-content/uploads/2020/04/multi-storey-car-park.jpg)')
        $('#tieude').html(`Đổi mới công nghệ thông minh và định hướng tương lai`)
        $('#gioithieu').html(`Hệ thống đỗ xe tự động IoT hướng tới tương lai hạnh phúc cho tất cả mọi
    người dựa trên tư duy công nghệ về con người và bảo vệ môi trường.`)
    }
    if (x === 2) {
        $('.content').css('background', 'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(https://lh3.googleusercontent.com/proxy/QAexwIkyz66RNqnYhVt3KyJ48UYnJaJHKjjTMF-yupLWD48yPcfjE0fCRMNzIXkNdsMPzgGHW3Iuf4MvYAGEUkW0x9OxJwSau5eIVcY-naAQJuelo16CsnllNP-kbNfOzsg)')
        $('#tieude').html(`Công nghệ RFID`)
        $('#gioithieu').html(`Radio Frequency Identification - Công nghệ nhận dạng đối tượng bằng sóng vô tuyến. Đối với thẻ 32bit có thể chứa tới 4 tỷ mã số. Khi sản xuất, mỗi một thẻ chip RFID sẽ được gắn 1 mã số hoàn toàn khác nhau. Điều này sẽ giúp cho RFID mang lại độ an toàn, tính bảo mật cao`)
    }
    if (x === 3) {
        $('.content').css('background', 'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(https://iiotvn.com/wp-content/uploads/2019/10/Hotel-Parking.jpg)')
        $('#tieude').html(`Tìm kiếm, giám sát và vận hành tiện lợi`)
        $('#gioithieu').html(`<div>Website thân thiện và trực quan. Ứng dụng Socket Server cùng Node.Js trong vận hành và giám sát mọi lúc mọi nơi.</div>
    `)
    }
    if (x === 4) {
        $('.content').css('background', 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(https://autopro8.mediacdn.vn/2019/7/12/img8833-1562932121868434251663.jpg)')
        $('#tieude').html(`Trang thiết bị sử dụng`)
        $('#gioithieu').html(`<div class="linhkien"><div><a href="https://banlinhkien.vn/goods-8742-kit-wifi-nodemcu-esp8266-ch340.html">NodeMcu ESP8266 CH340</a></div>
    <div><a href="https://banlinhkien.vn/goods-5156-kit-arduino-mega2560-atmega16u2.html">Arduino MEGA2560 ATMEGA16U2</a></div>
    <div><a href="https://lkcg.vn/module-rfid-rc522-13-56mhz">RFID RC522 13.56MHz</a></div>
    <div><a href="https://lkcg.vn/lcd1602-3-3-5v">LCD1602 3.3-5V</a></div>
    <div><a href="https://lkcg.vn/module-chuyen-doi-i2c-cho-lcd1602">I2C cho LCD1602</a></div>
    <div><a href="https://banlinhkien.vn/goods-8371-module-thu-phat-hong-ngoai-mh-ir01.html">Thu Phát Hồng Ngoại MH-IR01</a></div>
    <div><a href="https://lkcg.vn/dong-co-rc-servo-sg90">Động Cơ RC Servo SG90</a></div>
    <div><a href="https://lkcg.vn/led-5mm-sieu-sang-cac-mau-sl-100c">LED 5mm</a></div></div>`)
    }
}
var x = 2
var auto = setInterval(function () {
    doitrang(x)
    x++
    if (x > 4) x = 1
}, 2000)
var andoi = function (y) {
    doitrang(y)
    clearInterval(auto)
}