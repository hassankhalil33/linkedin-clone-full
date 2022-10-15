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
  res.json(job._id)
}

const deleteJob = async (req, res) => {
  const {id} = req.body;
  if (!id) {
    res.status(400).json({message: "no id"})
  }

  await Job.findByIdAndDelete(id);
  
  res.json({message: "success"})
}

const updateJob = async (req, res) => {
  const {id, title, description} = req.body;
  if (!id) {
    res.status(400).json({message: "no id"})
  }

  await Job.findByIdAndUpdate(id, {title: title, description: description});
  
  res.json({message: "success"})
}

const getJob = async (req, res) => {
  const {id} = req.body;
  if (!id) {
    res.status(400).json({message: "no id"})
  }

  const job = await Job.findById(id);

  res.json(job)
}

module.exports = {
  createJob,
  getCompany,
  deleteJob,
  updateJob,
  getJob
}
