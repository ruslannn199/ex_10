import express from "express";
import { BookController } from "./book";

export const router = express.Router();

const bookRouter = express.Router();

bookRouter.route("/").get(BookController.getAll).post(BookController.create);

bookRouter
  .route("/:id")
  .get(BookController.getById)
  .put(BookController.update)
  .delete(BookController.delete);

router.use("/books", bookRouter);
