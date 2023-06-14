import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  salary: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  location: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  jobtype: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
});

const jobdesc = mongoose.model("test", userSchema);

export default jobdesc;
