import { type GetAllListofBoardResponse, type GetAllListofBoardRequest, type List, useLists, type CreateListRequest, type CreateListResponse } from "@/features/lists/index";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createContext } from "react";

interface ListContextType {
    // State
    list: List[];
    isLoading: boolean;
    error: string | null;

    // Functions
    getAllListsOfBoard: (request: GetAllListofBoardRequest) => Promise<GetAllListofBoardResponse>;
    fetchCreateList: (request: CreateListRequest) => Promise<CreateListResponse>;
    addListToState: (list: List) => void;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export function ListProvider({ children }: { children: React.ReactNode }) {
    const { boardId } = useParams<{ boardId: string }>();
    const [list, setList] = useState<List[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { getAllListsOfBoard, createList } = useLists();

    // get data from api
    useEffect(() => {
        if (boardId) {
            fetchLists(boardId);
        }
    }, [boardId]);

    const fetchLists = async (boardId: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await getAllListsOfBoard({ boardId });
            setList(data as unknown as List[]);
        } catch (err) {
            setError("Failed to fetch lists");
            console.error(`Failed to fetch lists: ${err}`);
        } finally {
            setIsLoading(false);
        }
    }

    const fetchCreateList = async (request: CreateListRequest) : Promise<CreateListResponse> => {
        try {
            const data = await createList(request);
            if (!data) throw new Error("Failed to create list");
            return data;
        }
        catch (err) {
            setError("Failed to create list");
            console.error(`Failed to create list: ${err}`);
            throw err;
        }
    }

    const addListToState = (list: List) => {
        setList(prevList => [...prevList, list]);
    }

    const value : ListContextType = {
        list, 
        isLoading,
        error,
        getAllListsOfBoard,
        fetchCreateList,
        addListToState,
    }

    return (
        <ListContext.Provider value={value}>
            {children}
        </ListContext.Provider>
    )
}

// custom hook
export function useListContext() {
    const context = useContext(ListContext);
    if (context === undefined) {
        throw new Error('useListContext must be used within a ListProvider');
    }
    return context;
}