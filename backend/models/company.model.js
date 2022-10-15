const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'name is required',
    trim: true
  },

  email: {
    type: String,
    required: 'email is required',
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: 'password is required',
    select: false,
    trim: true
  },

  photo: {
    type: String
  },

  description: {
    type: String,
    trim: true
  },

  location: {
    type: String,
    trim:true
  },

  jobs: {
    type: Array
  },
})

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
