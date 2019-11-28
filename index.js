const express = require("express");
const fs = require("fs");
const rootRouter = require("./routes/rootRoute");
const aboutRouter = require("./routes/aboutRoute");
const PORT = '8000';
const app = express();
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "templates"));
app.use(express.static("static"));

app.use(function (req, res, next) {
    console.log(req.url);
    next();
})

app.use("/home", rootRouter);
app.use("/about", aboutRouter);

// app.use(function (req, res, next) {
//     console.log("Hello from use");
//     next();
// })

app.get("/", function (req, res, next) {
    fs.readFile("package.json", function(err, data) {
        //console.log(data.toString());
        let json = data.toString();
        let packageMeta= JSON.parse(json);
        let result = {
            name: packageMeta.name,
            version: packageMeta.version,
            author: packageMeta.author,
            scripts: packageMeta.scripts
        }
        res.render("index", result);
    })
    
});

app.get("/list", function (req, res, next) {
    fs.readFile("package.json", function(err, data) {
        //console.log(data.toString());
        let json = data.toString();
        let packageMeta= JSON.parse(json);
        let result = {
            name: packageMeta.name,
            version: packageMeta.version,
            author: packageMeta.author
        }
        //res.json(result);
    })
    res.render("index");
    //res.json({ message: "Hello Sdwdaw" });
});

app.get("/files", function(req, res) {
    
    fs.readdir('./', function(err,files) {
        res.json({files});
    })
})

// app.get("/notes", function (req, res) {
//     res.json({ users: ["Alice", "John"] })
// });

app.get("*", function (req, res) {
    console.log("No such route");
    res
        .status(404)
        .send("No such route");
})

app.listen(PORT, function () {
    console.log("The magic happens on port " + PORT);
});