import { ListEndpoint } from "@/shared/api/endpoints";
import type {
  CreateListRequest,
  CreateListResponse,
  GetAllListofBoardRequest,
  GetAllListofBoardResponse,
} from "./type";
import { fetchFactory } from "@/shared/api";

export const listApi = {
  getAllListOfBoard: (
    request: GetAllListofBoardRequest,
  ): Promise<GetAllListofBoardResponse> => {
    return fetchFactory.get<GetAllListofBoardResponse>(
      ListEndpoint.GET_ALL_LISTS_OF_BOARD.replace("{boardId}", request.boardId),
    );
  },

  // create list
  createList: (request: CreateListRequest): Promise<CreateListResponse> => {
    const { board_id, ...body } = request;
    return fetchFactory.post<CreateListResponse>(
      ListEndpoint.CREATE_LIST.replace("{boardId}", board_id),
      body,
    );
  },
};
