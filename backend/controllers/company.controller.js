const User = require("../models/user.model");
const Company = require("../models/company.model");
const Job = require("../models/job.model");

const getCompany = async (req, res) => {
  const company = req.company;
  console.log(req.company.id)
  res.json(company)
}

const createJob = async (req, res) => {
  const {title, description} = req.body;
  const companyId = req.company._id;

  const job = new Job();
  job.title = title;
  job.description = description;
  job.company = companyId;

  await job.save();
  res.json({message: job._id})
}

const deleteJob = async (req, res) => {
  const {id} = req.body;

  await Job.findByIdAndDelete(id);
  
  res.json({message: "success"})
}

module.exports = {
  createJob,
  getCompany,
  deleteJob
}
