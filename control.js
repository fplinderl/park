const CarModel = require("./model");
const path = require("path")
const fs = require("fs")
var image = function (req, res, next) {
  res.json(req.file.filename);
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
var rename=function(req,res){
  oldname=req.body.oldname
  newname=req.body.newname
  var oldname = path.join(__dirname, "./public/" + oldname);
  var newname = path.join(__dirname, "./public/" + newname);
  fs.rename(oldname, newname, (err) => {
    if (err) console.log(err);
  });
  res.json(req.file);
}
module.exports = {image,getall,rename};
