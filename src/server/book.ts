import { RequestHandler } from "express";
import { query } from "./db";
import type { Book } from "./types";

export class BookController {
  private constructor() {}

  public static create: RequestHandler = async (req, res) => {
    const { name, author, pageCount, genre, image, year } = req.body;

    const items = await query<Book>(
      `
      INSERT INTO books (id, name, author, pageCount, genre, image, year)
      VALUES (gen_random_uuid (), $1, $2, $3, $4, $5, $6)
    `,
      [name, author, pageCount, genre, image, year]
    );

    res.status(201).json(items[0]);
  };

  public static getAll: RequestHandler = async (req, res) => {
    const items = await query<Book>(`SELECT * FROM books`);

    res.status(200).json({ items });
  };

  public static getById: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const items = await query<Book>(`SELECT * FROM books WHERE id = $1`, [id]);

    res.status(200).json(items[0]);
  };

  public static update: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { name, author, pageCount, genre, image, year } = req.body;

    const items = await query<Book>(
      `
      UPDATE books
      SET name = $1, author = $2, pageCount = $3, genre = $4, image = $5, year = $6
      WHERE id = $7
    `,
      [name, author, pageCount, genre, image, year, id]
    );

    res.status(200).json(items[0]);
  };

  public static delete: RequestHandler = async (req, res) => {
    const { id } = req.params;

    await query(`DELETE FROM books WHERE id = $1`, [id]);

    res.status(204).send();
  };
}
