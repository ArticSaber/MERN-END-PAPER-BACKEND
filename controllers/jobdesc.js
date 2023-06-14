import JobDesc from "../models/jobdesc.js";
import wrapper from "../middleware/wrapper.js";

const getJobDesc = wrapper(async (req, res) => {
  const getjob = await JobDesc.find({});
  res.status(200).json(getjob);
});

const postJobDesc = wrapper(async (req, res) => {
  console.log(req.body);
  const addjob = await JobDesc.create(req.body);
  res.status(201).json(addjob);
});

export { getJobDesc, postJobDesc };
