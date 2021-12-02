const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoutes");
const cartRoute = require("./routes/cartRoutes");
const orderRoute = require("./routes/orderRoutes");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db sucessful");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.use(express.static(path.join(__dirname, "/<front end app folder name>/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/<front end app folder name>/build', 'index.html'));
});
app.listen(process.env.PORT || 5000, () => {
  console.log("connected");
});
