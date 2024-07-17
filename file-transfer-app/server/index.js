const express = require('express');
const {connectMongoDb} = require('./connection');
const userRouter = require('./routes/user');
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// NOTE : Provide a Database URL.
connectMongoDb(process.env.MONGODB_URI);

app.use(express.urlencoded({extended:false}));

app.use(userRouter);

app.listen(3000,()=>{
    console.log('Server Started on PORT : 3000!');
});