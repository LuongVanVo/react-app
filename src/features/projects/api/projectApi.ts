import { fetchFactory } from "@/shared/api";
import { ProjectEndpoint } from "@/shared/api/endpoints";
import type { Project } from "./type";

export const projectApi = {
  getAllProjectsOfUser: (): Promise<Project[]> => {
    return fetchFactory.get<Project[]>(
      ProjectEndpoint.GET_ALL_PROJECTS_OF_WORKSPACE,
    );
  },
};
