import { fetchFactory } from "@/shared/api";
import type {
  CreateCardRequest,
  CreateCardResponse,
  GetAllCardsOfBoardRequest,
  GetAllCardsOfBoardResponse,
} from "./type";
import { CardEndpoint } from "@/shared/api/endpoints";

export const cardApi = {
  getAllCardsOfBoard: (
    request: GetAllCardsOfBoardRequest,
  ): Promise<GetAllCardsOfBoardResponse> => {
    return fetchFactory.get<GetAllCardsOfBoardResponse>(
      CardEndpoint.GET_ALL_CARDS_OF_BOARD.replace("{boardId}", request.boardId),
    );
  },

  // create card
  createCard: (request: CreateCardRequest): Promise<CreateCardResponse> => {
    return fetchFactory.post<CreateCardResponse>(
      CardEndpoint.CREATE_CARD,
      request,
    );
  },
};
