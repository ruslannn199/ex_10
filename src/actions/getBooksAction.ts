"use server";

import { Book, PaginatedResponse } from "@/server/types";
import { request } from "@/utils";

export const getBooksAction = async () => {
  const response = await request("books", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["books"] },
  });

  return (await response.json()) as PaginatedResponse<Book>;
};
