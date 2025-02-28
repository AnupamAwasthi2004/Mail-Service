function mail(email, price, productId, productName, description) {
  console.log(email, price, productId, productName, description);
  var nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Enter your email address",
      pass: "enter the password(App Password) of your email",
    },
  });

  var mailOptions = {
    from: "anupamstudy2004@gmail.com",
    to: email,
    subject: "Order Confirmed",
    text: `Price: ${price}\n ProductId : ${productId}\n ProductName : ${productName}\n Description : ${description}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = {
  mail: mail,
};
