require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
//
const mongoose = require("mongoose");
const { Schema } = mongoose; 
//
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
//
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("Database Connected");
}
//Schema
const productSchema = new Schema({
      title: String,
      description: String,
      price: Number,
      discountPercentage: Number,
      rating: Number,
      brand: String,
      category: String,
      thumbnail: String,
      images:[String]
});
const Product = mongoose.model("Product", productSchema);

//bodyParser
server.use(express.json());
server.use(morgan('dev'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);

server.listen(process.env.PORT, () => {
  console.log('server started');
});
