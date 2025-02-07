import { Router } from "express";
import {
  getAdverts,
  modifyAdvert,
  uploadAdvert,
  deleteAdvert,
} from "../controller/advertCtrl.js";

const advertRouter = Router();

advertRouter.route("/").get(getAdverts).post(uploadAdvert).put(modifyAdvert);

advertRouter.delete("/:id", deleteAdvert);

export default advertRouter;
