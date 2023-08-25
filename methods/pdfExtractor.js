const fs = require("fs");
const path = require("path");
const PDFParser = require("pdf-parse");

// Path to the PDF file
// const pdfPath = "path/to/your/pdf/file.pdf";

// Read the PDF file
// const pdfData = fs.readFileSync(p);

const pdfExtractorFunction = () => {
  console.log("here");
  fs.readFile(
    path.join(__dirname, "..", "pdfFiles/JS-MERN.pdf"),
    (err, pdfData) => {
      // Parse the PDF data
      if (err) console.log(err);
      else {
        PDFParser(pdfData)
          .then((data) => {
            const text = data.text; // Extracted text
            // console.log(text);
            return text;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  );
};

module.exports = pdfExtractorFunction;
