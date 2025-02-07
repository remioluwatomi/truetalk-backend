import { Router } from "express";
import {
  getAllBooks,
  updateBook,
  uploadBook,
  deleteBook,
} from "../controller/booksCtrl.js";

const booksRouter = Router();

booksRouter.route("/").get(getAllBooks).post(uploadBook).put(updateBook);

booksRouter.delete("/:id", deleteBook);

export default booksRouter;
