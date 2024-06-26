const { Schema, model } = require("mongoose");

const add_cugSchema = new Schema({
  cugNo :
  {
    type : String,
    required: true,
    // validate: {
    //   validator: function(v) {
    //     return /\d{10}/.test(v);
    //   },
    //   message: 'Invalid phone number. Please enter a 10-digit phone number.'
    // }

  },
  empNo: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
 
  designation: {
    type: String,
    required: true
  },

  department: {
    type: String,
    required: true
  },
  billUnit: {
    type: String,
    required: true
  },
  allocation: {
    type: String,
    required: true
  },

  operator:{
    type: String,
    required: true,
    
  },

  plan: {
    type: String,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  draft: {
    type: Boolean,
    default: false
  }
  });
  

  
  const  Add_cug =new model("Add_cug",add_cugSchema);
  
  module.exports= Add_cug;