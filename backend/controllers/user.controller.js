const User = require("../models/user.model");

const getAllUsers = async (req, res)=>{
  const users = await User.find().lean();
  res.json({users: users})
}

const getUser = async (req, res)=>{
  const user = req.user;
  res.json(user)
}

module.exports = {
  getAllUsers,
  getUser
}
