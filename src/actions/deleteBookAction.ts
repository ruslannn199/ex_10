import { request } from "@/utils";

export const deleteBookAction = async (id: string) => {
  await request(`books/${id}`, {
    method: "DELETE",
  });
};
