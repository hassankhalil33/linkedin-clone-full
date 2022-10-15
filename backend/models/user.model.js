const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

  following: {
    type: Array
  },

  cv: {
    type: String
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
