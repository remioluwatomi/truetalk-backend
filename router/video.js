import { Router } from "express";
import {
  getAllVids,
  updateVid,
  uploadVid,
  deleteVid,
} from "../controller/vidCtrl.js";

const vidRouter = Router();

vidRouter.route("/").get(getAllVids).post(uploadVid).put(updateVid);

vidRouter.delete("/:id", deleteVid);

export default vidRouter;
