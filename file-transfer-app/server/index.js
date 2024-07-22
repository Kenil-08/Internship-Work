const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const http = require('http');
const app = express();
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const { connectMongoDb } = require("./connection");
const userRoute = require("./routes/user");
const staticRoute = require("./routes/staticRouter");
const {restrictToLoggedInUserOnly} = require('./middlewares/auth');
const dotenv = require("dotenv");

dotenv.config();

// NOTE : Provide a Database URL.
connectMongoDb(process.env.MONGODB_URI);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Below line make sure that you are logged in and then after only you can access file upload page.
// app.use("/file", restrictToLoggedInUserOnly, fileRoute); 
app.use("/user", userRoute);
app.use("/", staticRoute);

app.listen(3000, () => {
  console.log("Server Started on PORT : 3000!");
});
