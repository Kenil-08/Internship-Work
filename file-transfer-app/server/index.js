const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectMongoDb } = require("./connection");
const userRoute = require("./routes/user");
const staticRoute = require("./routes/staticRouter");
// const User = require('./models/user');
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// NOTE : Provide a Database URL.
connectMongoDb(process.env.MONGODB_URI);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.get('/test', async(req,res)=>{
//     const allUsers = await User.find({});
//     console.log(allUsers);
//     return res.render('home',{
//         users: allUsers,
//     });
// });

app.use("/user", userRoute);
app.use("/", staticRoute);

app.listen(3000, () => {
  console.log("Server Started on PORT : 3000!");
});
