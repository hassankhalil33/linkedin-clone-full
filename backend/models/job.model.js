const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'name is required',
    trim: true
  },

  description: {
    type: String,
    trim: true
  },

  company: {
    type: String
  },

  applicants: {
    type: Array
  },

  worker: {
    type: String
  },

  timestamp: {
    type: Date, 
    default: Date.now
  }
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
