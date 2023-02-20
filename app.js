const express = require("express");
const port = process.env.port || 8000;
const router = require("./routes/route");
const path = require("path");

//Express JS
const app = express();

//  built-in middleware function of express JSON
app.use(express.json());

// Using build-in express body parser
app.use(express.urlencoded({ extended: true }));

// Getting routes from routes folder
app.use("/", router);

// Templating Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

// Static file sources from public folder
app.use(express.static(path.join(__dirname, "public")));

// listen the port
app.listen(port, () => {
  console.log(`Listening to server port ${port}`);
});
