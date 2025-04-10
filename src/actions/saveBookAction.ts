"use server";

import { Book } from "@/server/types";
import { request } from "@/utils";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const saveBookAction = async (
  values: Omit<Book, "id"> & { id?: string }
) => {
  const { id, ...rest } = values;
  if (id) {
    await request(`books/${id}`, {
      method: "PUT",
      body: JSON.stringify(rest),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    await request("books", {
      method: "POST",
      body: JSON.stringify(rest),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  revalidateTag("books");
  redirect("/");
};
