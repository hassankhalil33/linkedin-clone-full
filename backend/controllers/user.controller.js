const User = require("../models/user.model");
const Company = require("../models/company.model");
const Job = require("../models/job.model");

const getAllCompanies = async (req, res) => {
  const companies = await Company.find().lean();
  res.json(companies)
}

const getUser = async (req, res) => {
  const user = req.user;
  res.json(user)
}

const getAllJobs = async (req, res) => {
  const jobs = await Job.find().lean();
  res.json(jobs)
}

const followCompany = async (req, res) => {
  const companyId = req.body.company_id;
  const user = await User.findById(req.user._id).lean();
  const data = [...user.following, companyId];

  await User.findByIdAndUpdate(req.user._id, {following: data})

  res.status(200).json({message: "success"})
}

const unfollowCompany = async (req, res) => {
  const companyId = req.body.company_id;
  const user = await User.findById(req.user._id).lean();
  const data = user.following.filter((id) => {
    return id != companyId
  })

  await User.findByIdAndUpdate(req.user._id, {following: data})

  res.status(200).json({message: "success"})
}

const retrieveNotifications = async (req, res) => {
  const userFollowing = req.user.following;
  // userFollowing.forEach(element => {
  //   const jobs = await Job.find().lean();
  // });

  userJobs = userFollowing.map(async (followId) => {
    return await Job.findById(followId).lean();
  })

  res.json(userJobs)
}

module.exports = {
  getAllCompanies,
  getUser,
  getAllJobs,
  followCompany,
  unfollowCompany,
  retrieveNotifications
}
