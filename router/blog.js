import { Router } from "express";
import { getAllBlogs, getBlog, uploadBlog } from "../controller/blogCtrl.js";

const blogRouter = Router();

blogRouter.route("/").get(getAllBlogs).post(uploadBlog);

blogRouter.route("/:blogId").get(getBlog);

export default blogRouter;
