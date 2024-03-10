const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
const app = express();

// connect our db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, console.log("DB is connected"));

// rotes & middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authController);
app.use("/product", productController);
app.use("/upload", uploadController);

// strart our server
app.listen(process.env.PORT, () =>
  console.log("server has started succesfully")
);
