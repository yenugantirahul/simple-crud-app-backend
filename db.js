const mongoose = require("mongoose");
require("dotenv");

mongoose
  .connect("mongodb+srv://rahul:user123@cluster0.rdzxuss.mongodb.net/", {
    dbName: "crud",
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection failed " + err);
  });
