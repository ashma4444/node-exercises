// Write a nodejs application that can generate pdf using text and images. Use package: pdfkit
const PDFDocument = require("pdfkit");
const fs = require("fs");

// Create a document
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream("output.pdf")); // creates pdf file in current folder

// Generate pdf using text
// Embed a font, set the font size, and render some text
doc.font("Times-Roman").fontSize(25).text("Some text with an embedded font!");

// Generate pdf using images
// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.addPage().font("Times-Roman").fontSize(25).text("Image Here!");

doc.image("img.jpg", {
  fit: [500, 500],
  align: "center",
  valign: "center",
});

// Finalize PDF file
doc.end();

/*
doc.pipe(fs.createWriteStream('/path/to/file.pdf'));: This line creates a PDF document (doc) and connects it to a writable stream (fs.createWriteStream('/path/to/file.pdf')). It means that anything you add to the PDF document (doc) will be written to the specified file path (/path/to/file.pdf), essentially saving the PDF to that location on your computer.
*/
