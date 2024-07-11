const express = require("express");

const app = express();
const PORT = 3000;
const bodyparser = require("body-parser");
const Product = require("./models/product.model");
const productRoutes = require("./routes/product.route");
require("dotenv");
require("./db");

app.use(bodyparser.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node API");
});

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`);
});
