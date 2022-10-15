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
  const {id} = req.company
  // console.log(req.company.company);
  // console.log(req.company.company._id);
  console.log(id);
  const companyId = req.company.company.id;

  const job = new Job();
  job.title = title;
  job.description = description;
  job.company = companyId;
  await job.save();
  res.json({message: "success"})
}

module.exports = {
  createJob,
  getCompany
}
