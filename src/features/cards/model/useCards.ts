import type { ApiError } from "@/shared/api/fetchFactory";
import type {
  CreateCardRequest,
  CreateCardResponse,
  GetAllCardsOfBoardRequest,
  GetAllCardsOfBoardResponse,
} from "../api/type";
import { cardApi } from "../api/cardApi";

export const useCards = () => {
  // get all cards of board
  const getAllCardsOfBoard = async (
    request: GetAllCardsOfBoardRequest,
  ): Promise<GetAllCardsOfBoardResponse> => {
    try {
      const data = await cardApi.getAllCardsOfBoard(request);
      if (!data) throw new Error("Failed to get all cards of board");
      return data;
    } catch (err) {
      const apiError = err as ApiError;
      console.error(`Failed to get all cards of board: ${apiError.message}`);
      throw apiError;
    }
  };

  // create card
  const createCard = async (
    request: CreateCardRequest,
  ): Promise<CreateCardResponse> => {
    try {
      const data = await cardApi.createCard(request);
      if (!data) throw new Error("Failed to create card");
      return data;
    } catch (err) {
      const apiError = err as ApiError;
      console.error(`Failed to create card: ${apiError.message}`);
      throw apiError;
    }
  };
  return {
    getAllCardsOfBoard,
    createCard,
  };
};
