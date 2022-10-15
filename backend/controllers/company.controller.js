const User = require("../models/user.model");
const Company = require("../models/company.model");
const Job = require("../models/job.model");

const getCompany = async (req, res) => {
  const company = req.company;
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
  const {id} = req.params;
  if (!id) {
    res.status(400).json({message: "no id"})
  }

  const job = await Job.findById(id);

  res.json(job)
}

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({company: req.company._id});

  res.json(jobs)
}

const deleteApplicant  = async (req, res) => {
  const {job_id, applicant_id} = req.body;
  if (!job_id || !applicant_id) {
    res.status(400).json({message: "no id"})
  }

  const job = await Job.findById(job_id);
  const data = job.applicants.filter((id) => {
    return id != applicant_id;
  })

  await Job.findByIdAndUpdate(job_id, {applicants: data});

  res.json({message: "success"})
}

const confirmApplicant = async (req, res) => {
  const {job_id, applicant_id} = req.body;
  if (!job_id || !applicant_id) {
    res.status(400).json({message: "no id"})
  }

  const job = await Job.findById(job_id);
  const data = [];

  await Job.findByIdAndUpdate(job_id, {applicants: data, apply: false, worker: applicant_id});
  await User.findByIdAndUpdate(applicant_id, {workplace: `${job.title} @ ${req.company.name}`});

  res.json({message: "success"})
}

const updateCompany = async (req, res) => {
  const {_id: id} = req.company;
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

//High Return Time
const getApplicants = async (req, res) => {
  const {id} = req.body;
  if (!id) {
    res.status(400).json({message: "no id"})
  }

  const job = await Job.findById(id);
  allApplicants = [];

  job.applicants.forEach(async element => {
    const user = await User.findById(element);
    allApplicants = [...allApplicants, user];
  });
  
  res.json(allApplicants)
}

module.exports = {
  createJob,
  getCompany,
  deleteJob,
  updateJob,
  getJob,
  confirmApplicant,
  deleteApplicant,
  getAllJobs,
  updateCompany,
  getApplicants
}
