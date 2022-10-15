
const getAllUsers = async (req, res)=>{
  const user = req.user;
  res.json({user: user})
}

module.exports = {
  getAllUsers
}
