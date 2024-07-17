const User = require('../models/user');

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({})
    // console.log(allDbUsers);
    const html = `
        <ul>
            ${allDbUsers.map((user) => `<li> ${user.email} - ${user.password}</li>`).join("")}
        </ul> 
    `;
    res.send(html);
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    return res.json(user);
}

async function handleUpdateUserById(req,res){
    const body = req.body;
    await User.findByIdAndUpdate(req.params.id, {email : body.email, password : body.password});
    return res.json({ status: "Update Success" });
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Delete Success" });
}

async function handleCreateUser(req,res){
    const body = req.body;
    if(!body || !body.email || !body.password) {
        return res.status(400).json({ msg: "All fields are required!" });
    }
    const result = await User.create({
        email: body.email,
        password : body.password,
    });
    return res.status(201).json({msg : 'Success', id : result._id}); 
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
}