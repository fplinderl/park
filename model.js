const mongoose = require('mongoose')
mongoose.connect(
  'mongodb+srv://thanhloc:thanhlochp99@cluster0.gossl.mongodb.net/park?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
const Schema = mongoose.Schema;
const carschema = new Schema(
  {
    rfid: String,
    carPlate: String,
    carIn: String,
  },
  {
    collection: "Car",
  }
);
const CarModel = mongoose.model("Car", carschema);
module.exports = CarModel;