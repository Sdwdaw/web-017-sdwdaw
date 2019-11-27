const express = require("express");

const PORT = '8000';
const app = express();

app.use(function (req, res, next) {
    console.log(req.url);
    next();
})

app.use(function (req, res, next) {
    console.log("Hello from use");
    next();
})

app.get("/", function (req, res, next) {
    //res.send("Hello");
    res.json({ message: "Hello Sdwdaw" });
});

app.get("/notes", function (req, res) {
    res.json({ users: ["Alice", "John"] })
});

app.get("*", function(req,res) {
    console.log("No such route");
    res
    .status(404)
    .send("No such route");
})

app.listen(PORT, function () {
    console.log("The magic happens on port " + PORT);
});