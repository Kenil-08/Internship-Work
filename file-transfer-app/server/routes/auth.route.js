const express = ("express");
const { signin, signup } = ("../controllers/auth.controller.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
