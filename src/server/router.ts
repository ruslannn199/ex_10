import express from "express";

export const router = express.Router();

const bookRouter = express.Router();

router.use("/books", bookRouter);
