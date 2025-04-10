"use server";

import { Book } from "@/server/types";
import { request } from "@/utils";

export const getBookAction = async (id: string) => {
  const response = await request(`books/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (await response.json()) as Omit<Book, "pageCount"> & {
    pagecount: number;
  };
};
