const express = require("express");
const rootRouter = new express.Router();

const users = ["Alice", "Tom", "Bob"];

rootRouter.get('/', function (req, res) {
    res.json({ message: 'Root route' });
});

rootRouter.get('/users', function (req, res) {
    res.json({ users })
});

rootRouter.get('/users/:index', function (req, res) {
    const index = req.params.index;
    console.log(`You try to get user by index ${index}`)
    const user = users[index]
    if(!user) {
        console.log(`User not found by index ${index}`);
        res.json({message: 'No such user!'})
    } else {
        res.json({user})
    }
});

module.exports = rootRouter;