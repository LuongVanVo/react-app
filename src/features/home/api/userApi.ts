import { fetchFactory } from "@/shared/api";
import { UserEndpoint } from "@/shared/api/endpoints";
import type { User } from "@/features/home/api/type";

export const userApi = {
  getAllUsers: (): Promise<User[]> => {
    return fetchFactory.get<User[]>(UserEndpoint.GET_ALL_USERS);
  },
};
