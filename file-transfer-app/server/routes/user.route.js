const express = ("express");
const { test } = ("../controllers/user.controller.js");

const router = express.Router();

router.get("/", test);

export default router;
