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

const updateUser = async (req, res) => {
  const {_id: id} = req.user;
  const {name, description, location, photo} = req.body;
  if (!id) {
    res.status(400).json({message: "no id"})
  }

  await Company.findByIdAndUpdate(id, {
    name: name,
    description: description,
    location: location
  });
  
  res.json({message: "success"})
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

//CANT RESOLVE PROMISE

// const retrieveNotifications = async (req, res) => {
//   const userFollowing = req.user.following;

//   const userJobs = Promise.resolve(userFollowing.map(async (followId) => {
//     let job = await Job.find({company: followId}).lean();
//     return job
//   }))

//   userJobs.then(data => {
//     console.log(data);
//     res.json(data);
//   })
// }

const retrieveNotifications = async (req, res) => {
  const userFollowing = req.user.following;

  if(userFollowing.length == 0) {
    res.json(userFollowing)
  }

  const jobs = await Job.find({
    $or: userFollowing.map((companyId) => {
      return {company: companyId}
    })}).lean();

  res.json(jobs)
}

const applyJob = async (req, res) => {
  const jobId = req.body.job_id;
  const job = await Job.findById(jobId);
  const data = [job.applicants, req.user._id];

  await Job.findByIdAndUpdate(jobId, {
    applicants: data
  })

  res.status(200).json({message: "success"})
}

const revokeApplyJob = async (req, res) => {
  const jobId = req.body.job_id;
  const job = await Job.findById(jobId);
  const data = job.following.filter((id) => {
    return id != req.user._id
  })

  await Job.findByIdAndUpdate(jobId, {
    applicants: data
  })

  res.status(200).json({message: "success"})
}

const applyJobEasy = async (req, res) => {
  const jobPosition = req.body.job_position;
  const re = new RegExp(jobPosition, "i")
  const jobs = await Job.find({title: {$regex: re}})

  jobs.forEach(async element => {
    await Job.findAndUpdate({_id: element._id, apply: true} , {applicants: req.user._id})
  });

  res.json({message: "success"})
}

module.exports = {
  getAllCompanies,
  getUser,
  getAllJobs,
  followCompany,
  unfollowCompany,
  retrieveNotifications,
  updateUser,
  applyJob,
  revokeApplyJob,
  applyJobEasy
}
