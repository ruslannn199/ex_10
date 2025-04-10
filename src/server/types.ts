export type PaginatedResponse<T> = {
  items: T[];
};

export type Book = {
  id: string;
  name: string;
  author: string;
  pageCount: number;
  genre: string;
  image: string;
  year: number;
};
