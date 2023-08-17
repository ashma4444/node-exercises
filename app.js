const http = require("http");
const QRCode = require("qrcode");
const myModule = require("./myModule");

// render a qrcode for the terminal -> toString
// Generate QR Code for  the url on the terminal using package qrcode
QRCode.toString("facebook.com", function (err, url) {
  console.log(url);
});

http
  .createServer(async (req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1> Welcome! </h1>");

    res.write("Date: " + myModule());

    // to display qrcode in image format in browser -> toDataURL
    const urlData = await QRCode.toDataURL("www.facebook.com");
    res.write(`<img src="${urlData}"> </img>`);
    res.end();
  })
  .listen(3001);

console.log("App is running in port 3001");

// to run: node app.js
// browser ma run garna: localhost:3001
