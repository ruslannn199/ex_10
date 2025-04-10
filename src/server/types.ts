export type PaginatedResponse<T> = {
  items: T[];
};

export type BookInput = {
  id: string;
  name: string;
  author: string;
  pageCount: number;
  genre: string;
  image: string;
  year: number;
};

export type Book = Omit<BookInput, "pageCount"> & {
  pagecount: number;
};
