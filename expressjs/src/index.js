const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 8000;

const sPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// set to view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(sPath));

app.get("", (req, res) => {
    res.render("index", {
        login: "Login Now",
    });
});

app.get("/about", async (req, res) => {
    res.render("about", {
        name: req.query.name,
    });
});

app.get("/", (req, res) => {
    res.send("welcame to the express home page");
});

app.listen(port, () => {
    console.log(`Listening in the port ${port}`);
});
