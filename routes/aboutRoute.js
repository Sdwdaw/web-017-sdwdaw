const express = require("express");
const aboutRouter = new express.Router();

aboutRouter.get('/', function (req, res) {
    // res.json({ message: 'This is about page' });
    res.render('pages/about');
});

aboutRouter.get('/users', function (req, res) {
    res.json({ users })
});

aboutRouter.get('/users/:index', function (req, res) {
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

module.exports = aboutRouter;