const express = require("express");

const router = express.Router();

router.get('/',(req,res)=>{
    return res.render('home');
});

router.get('/login',(req,res)=>{
    return res.render('login');
});

router.get('/signup',(req,res)=>{
    return res.render('signup');
});

router.get('/chat',(req,res)=>{
    return res.render('chat');
});

module.exports = router;