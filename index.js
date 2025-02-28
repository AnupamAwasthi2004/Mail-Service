const express = require("express");
const { mail } = require("./mail-Service");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/order", (req, res) => {
  res.send("Mail Sent Successfully");
  mail(
    req.body.email,
    req.body.price,
    req.body.productId,
    req.body.productName,
    req.body.description
  );
});

app.listen(8000, () => {
  console.log("Server Start at port 8000");
});
