import type { ApiError } from "@/shared/api/fetchFactory";
import type {
  CreateListRequest,
  CreateListResponse,
  GetAllListofBoardRequest,
  GetAllListofBoardResponse,
} from "../api/type";
import { listApi } from "../api/listApi";

export const useLists = () => {
  // get all lists of board
  const getAllListsOfBoard = async (
    request: GetAllListofBoardRequest,
  ): Promise<GetAllListofBoardResponse> => {
    try {
      const data = await listApi.getAllListOfBoard(request);
      if (!data) throw new Error("Failed to get all lists of board");
      return data;
    } catch (err) {
      const apiError = err as ApiError;
      console.error(`Failed to get all lists of board: ${apiError.message}`);
      throw apiError;
    }
  };

  // create list
  const createList = async (
    request: CreateListRequest,
  ): Promise<CreateListResponse> => {
    try {
      const data = await listApi.createList(request);
      if (!data) throw new Error("Failed to create list");
      return data;
    } catch (err) {
      const apiError = err as ApiError;
      console.error(`Failed to create list: ${apiError.message}`);
      throw apiError;
    }
  };

  return {
    getAllListsOfBoard,
    createList,
  };
};
