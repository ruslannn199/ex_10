"use server";

import { Book, PaginatedResponse } from "@/server/types";
import { request } from "@/utils";

export const getBooksAction = async (search?: Record<string, string>) => {
  const response = await request(
    `books?${new URLSearchParams(search).toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: ["books"] },
    }
  );

  return (await response.json()) as PaginatedResponse<Book>;
};
