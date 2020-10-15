const CarModel = require("./model");
const path = require("path")
const fs = require("fs")
var image = function (req, res, next) {
  res.json("/public/" + req.file.filename);
}
module.exports = { carPlate, create, multipartMiddleware, find, image, carout };
