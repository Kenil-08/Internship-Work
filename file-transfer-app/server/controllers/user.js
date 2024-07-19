const {v4: uuidv4} = require('uuid');
const User = require("../models/user");
const {setUser} = require('../service/auth');
// async function handleGetAllUsers(req,res){
//     const allDbUsers = await User.find({})
//     // console.log(allDbUsers);
//     const html = `
//         <ul>
//             ${allDbUsers.map((user) => `<li> ${user.email} - ${user.password}</li>`).join("")}
//         </ul>
//     `;
//     res.send(html);
// }

// async function handleGetUserById(req,res){
//     const user = await User.findById(req.params.id);
//     return res.json(user);
// }

// async function handleUpdateUserById(req,res){
//     const body = req.body;
//     await User.findByIdAndUpdate(req.params.id, {email : body.email, password : body.password});
//     return res.json({ status: "Update Success" });
// }

// async function handleDeleteUserById(req,res){
//     await User.findByIdAndDelete(req.params.id);
//     return res.json({ status: "Delete Success" });
// }

async function handleUserSignup(req, res) {
  const { email, password } = req.body;
  await User.create({
    email,
    password,
  });
  return res.render("home");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
//   console.log(user);
  if (!user){
    // console.log('Invalid User or Password !');
    return res.render("login", { error: "Invalid Username or Password!" });
  }
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid",sessionId)
  return res.render("home");
}

module.exports = {
  // handleGetAllUsers,
  // handleGetUserById,
  // handleUpdateUserById,
  // handleDeleteUserById,
  handleUserSignup,
  handleUserLogin
};
