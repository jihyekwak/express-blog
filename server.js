require("dotenv").config() // always top
// external module
const express = require("express");
const methodOverride = require("method-override");

// internal module
const routes = require("./routes");

// instanced module
const app = express();

// configuration
const PORT = 4000;

app.set("view engine", "ejs");

// middleware
// body data middleware
app.use(express.urlencoded({ extended: true }));
// method override middleware
app.use(methodOverride("_method"));
// serve public files
app.use(express.static("public"));
// logger
app.use((req, res, next) => {
    console.log(req.url, res.method);
    next();
})

// routes & controllers
// home route
// app.get("/", (req, res) => {
//     res.send("<h1>Welcome to this dope blog app</h1>")
// });

app.get("/", (req, res) => {
	res.render("index");
});

// err route
app.get((req, res) => {
    res.send("404! Error! Page not found :(");
});

// Internal Routes 
app.use("/authors", routes.authors);

// listener
app.listen(PORT, () => {
    console.log(`Dope blog app is live at http://localhost:${PORT}.`)
});