const CarModel = require("./model");
const path = require("path")
const fs = require("fs")
var image = function (req, res, next) {
  var oldname = path.join(__dirname, "./public/" + req.file.filename);
  var newname = path.join(__dirname, "./public/" + req.file.originalname);
  fs.rename(oldname, newname, (err) => {
    if (err) console.log(err);
  });
  res.json("/public/" + req.file.originalname);
}
var getall = function(req,res){
  CarModel.find({})
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    res.status(500).json("loi getall roi")
  })
}
module.exports = {image,getall};
