const express = require("express");
const { signin, signup } = require("../controllers/auth.controller.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
