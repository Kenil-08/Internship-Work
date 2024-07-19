const express = require("express");
const {
  // handleGetAllUsers,
  // handleGetUserById,
  // handleUpdateUserById,
  // handleDeleteUserById,
  handleUserSignup,
  handleUserLogin
} = require("../controllers/user");

const router = express.Router();

router.post('/', handleUserSignup);
router.post('/login',handleUserLogin)
// router.route("/user").get(handleGetAllUsers).post(handleCreateUser);

// router
//   .route("/user/:id")
//   .get(handleGetUserById)
//   .patch(handleUpdateUserById)
//   .delete(handleDeleteUserById);

module.exports = router;
