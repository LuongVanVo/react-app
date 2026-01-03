import { type Card, type GetAllCardsOfBoardResponse, type GetAllCardsOfBoardRequest, useCards, type CreateCardRequest, type CreateCardResponse } from "@/features/cards/index";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface CardDetailContextType {
    // State
    cards: Card[];
    isLoading: boolean;
    error: string | null;

    // Functions
    getAllCardsOfBoard: (request: GetAllCardsOfBoardRequest) => Promise<GetAllCardsOfBoardResponse>;
    fetchCreateCard: (request: CreateCardRequest) => Promise<CreateCardResponse>;
    addCardToState: (card: Card) => void;
}

const CardDetailContext = createContext<CardDetailContextType | undefined>(undefined);

export function CardDetailProvider({ children }: { children: React.ReactNode }) {
    const { boardId } = useParams<{ boardId: string }>();
    const [cards, setCards] = useState<Card[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { getAllCardsOfBoard, createCard } = useCards();

    // get data from api
    useEffect(() => {
        if (boardId) {
            fetchCards(boardId);
        }
    }, [boardId]);

    const fetchCards = async (boardId: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await getAllCardsOfBoard({ boardId });
            
            let cardsData: Card[] = [];
            
            if (Array.isArray(data)) {
                cardsData = data;
            } else if (data && typeof data === 'object' && 'cards' in data) {
                cardsData = data.cards || [];
            }

            // Lưu trực tiếp cards
            setCards(cardsData);
        } catch (err) {
            setError("Failed to fetch cards");
            console.error(`Failed to fetch cards:`, err);
            setCards([]);
        } finally {
            setIsLoading(false);
        }
    }

    // create card
    const fetchCreateCard = async (request: CreateCardRequest) : Promise<CreateCardResponse> => {
        try {
            const data = await createCard(request);
            if (!data) throw new Error("Failed to create card");
            return data;
        } catch (err) {
            setError("Failed to create card");
            console.error(`Failed to create card: ${err}`);
            throw err;
        }
    }

    const addCardToState = (card: Card) => {
        setCards(prevCards => [...prevCards, card]);
    }

    const value: CardDetailContextType = {
        cards,
        isLoading,
        error,
        getAllCardsOfBoard,
        fetchCreateCard,
        addCardToState
    }

    return (
        <CardDetailContext.Provider value={value}>
            {children}
        </CardDetailContext.Provider>
    )
}

// custom hook 
export function useCardDetailContext() {
    const context = useContext(CardDetailContext);
    if (context === undefined) {
        throw new Error('useCardDetail must be used within a CardDetailProvider');
    }
    return context;
}