import { query } from "./db";

export const seedData = async () => {
  await query(`
    CREATE TABLE IF NOT EXISTS public.books (
        id uuid NOT NULL,
        name text NOT NULL,
        author text NOT NULL,
        pageCount integer NOT NULL,
        genre text NOT NULL,
        image text NOT NULL,
        year integer NOT NULL,
        PRIMARY KEY (id)
    );`);
};
