const nodemailer = require("nodemailer");
const user = require("../model/user");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "jadhavabhishek1911@gmail.com",
      pass: "lwsm lbyo kpqs ttho",
    },
  });

  const mailOptions = {
    from: "jadhavabhishek1911@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
