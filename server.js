const express = require("express");
var ip = require("ip");
const path = require("path");
const control = require("./control");
const multer = require("multer");
const bodyParser = require("body-parser");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const upload = multer({ dest: "public" });
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var plate = { message: "2222" };
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "test.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/vitri", (req, res) => {
  res.sendFile(path.join(__dirname, "vitri.html"));
});
app.get("/api/getall", control.getall);
app.post("/api/uploadimage", upload.single("file"), function (req, res, next) {
  res.json(req.file.filename);
});
app.put("/api/rename", urlencodedParser, control.rename);
app.delete(
  "/api/delimage/:name",
  function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  },
  control.delimage
);
io.on("connection", (socket) => {
  io.emit("connected", { msg: "connected" });
  io.emit("vitriread", plate);
  socket.on("vitri", (msg) => {
    socket.broadcast.emit("vitriread", msg);
    return (plate = msg);
  });
  socket.on("arduino", function (data) {
    io.sockets.emit('atime', { time: new Date().toJSON() });
  });
});
http.listen(process.env.PORT || 3001, () => {});
