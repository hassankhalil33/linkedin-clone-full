const User = require("../models/user.model");
const Company = require("../models/company.model");
const Job = require("../models/job.model");

const getAllCompanies = async (req, res)=>{
  const companies = await Company.find().lean();
  res.json(companies)
}

const getUser = async (req, res)=>{
  const user = req.user;
  res.json(user)
}

module.exports = {
  getAllCompanies,
  getUser
}
