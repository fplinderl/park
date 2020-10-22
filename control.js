const CarModel = require("./model");
const path = require("path")
const fs = require("fs")
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
  newname=req.body.newname+".jpg"
  var oldname = path.join(__dirname, "./public/" + oldname);
  var newname = path.join(__dirname, "./public/" + newname);
  fs.rename(oldname, newname, (err) => {
    if (err) console.log(err);
  });
  res.json(req.file);
}
var delimage = function(req,res){
  name = req.params.name
  fs.unlink("./public/"+name,function(){})
}
module.exports = {getall,rename,delimage};
