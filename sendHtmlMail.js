"use strict";
const nodemailer = require("nodemailer");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

async function main() {
  const info = await transporter.sendMail({
    from: "np01cp4s210041@islingtoncollege.edu.np", // sender address
    to: "ashma20570218@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    // html: "<h1 style='color: blue;'>Hello world! Mail sent successfully.</h1>",
    // or html file
    html: { path: "mailFile.html" },
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
