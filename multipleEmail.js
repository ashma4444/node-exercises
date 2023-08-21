"use strict";
const fs = require("fs");
const handlebars = require("handlebars");
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

const main = async (oayload) => {
  const { emailMsg, to } = payload;
  const htmlFile = await fs.readFileSync("./template.html"); // Buffer
  const htmlData = Buffer.from(htmlFile).toString(); // converting buffer to string

  const template = handlebars.compile(htmlData);
  const data = template(emailMsg?.data);

  const msgOptions = {
    from: "np01cp4s210041@islingtoncollege.edu.np", // sender address
    to: to.map((pEmail) => {
      return pEmail.toString();
    }), // list of receivers
    subject: emailMsg.subject.toString(), // Subject line
    text: emailMsg.text.toString(),
    html: data,
  };
  const info = await transporter.sendMail(msgOptions);

  console.log("Message sent: %s", info.messageId);
};

const payload = {
  emailMsg: {
    subject: "Hello!",
    text: "How are you?",
    data: {
      name: "Ashma",
      customMsg: "K cha?",
    },
  },
  to: ["kushalbastola07@gmail.com", "ashma20570218@gmail.com"],
};

main(payload).catch(console.error);
