import { Router } from "express";
import {
  getAllImages,
  uploadImage,
  deleteImage,
} from "../controller/galleryCtrl.js";

const galleryRouter = Router();

galleryRouter.route("/").get(getAllImages).post(uploadImage);

galleryRouter.delete("/:id", deleteImage);

export default galleryRouter;
