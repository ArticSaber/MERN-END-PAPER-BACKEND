import Express, { Router } from "express";
import { getJobDesc, postJobDesc } from "../controllers/jobdesc.js";
const router = Express.Router();

router.route("/jobdesc").get(getJobDesc);
router.route("/admin").post(postJobDesc);

export default router;
