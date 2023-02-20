const express = require("express");
const QRCode = require("qrcode");
const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.render("index.ejs");
});

// scan route
router.post("/scan", (req, res) => {
  const input_text = req.body.text;
  QRCode.toDataURL(input_text, (err, src) => {
    if (err) {
      res.send("something went wrong");
    }
    res.render("scan", {
      // rendering the scan ejs file from view folder
      qr_code: src,
    });
  });
});

// exporting to app.JS
module.exports = router;
