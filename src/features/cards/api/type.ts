import type { User } from "@/features/home/api/type";

export interface Card {
  id: string;
  list_id: string;
  board_id: string;
  title: string;
  description: string;
  position: number;
  created_by: User;
  created_at: string;
  updated_at: string;
  comments_count: number;
  attachments_count: number;
  archived: boolean;
  start_date: string;
  end_date: string;
  is_completed: boolean;
  lists: ListItem[];
  labels: any[];
  checklists: any[];
  cardMembers: CardMember[];
  assigned_users: AssignedUser[];
}

interface CardMember {
  card_id: string;
  user_id: string;
  assigned_at: string;
}

interface AssignedUser {
  user_id: string;
  name: string;
  email: string;
  avatar_url: string;
  assigned_at: string;
}

export interface ListItem {
  id: string;
  board_id: string;
  title: string;
  name: string;
  archived: boolean;
  position: number;
  cover_img: string;
  cards: Card[];
}

export interface GetAllCardsOfBoardRequest {
  boardId: string;
}

export interface GetAllCardsOfBoardResponse {
  cards: Card[];
}

export interface CreateCardRequest {
  title: string;
  description?: string;
  list_id: string;
}

export interface CreateCardResponse {
  card: Card;
}

export interface DeleteCardRequest {
  cardId: string;
}

export interface DeleteCardResponse {
  card: Card;
}

export interface UpdateCardRequest {
  cardId: string;
  title?: string;
  description?: string;
}

export interface UpdateCardResponse {
  card: Card;
}

export interface AssignedUserToCardRequest {
  cardId: string;
  user_id: string;
}

export interface AssignedUserToCardResponse {
  userId: string;
  name: string;
  email: string;
  avatar_url: string;
  assigned_at: string;
}

export interface UnassignUserFromCardRequest {
  cardId: string;
  userId: string;
}
