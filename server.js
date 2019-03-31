const express = require("express");
const path = require("path");
const hbars = require("express-handlebars");
const PORT = process.env.PORT || 8080;
const app = express();

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_Controller.js");

//  Express assets config
app.use(express.static(path.join(__dirname, "public")));

// Epress request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", hbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

app.listen(PORT, () => {
  console.log(`App now listening at localhost: ${PORT}`);
});
