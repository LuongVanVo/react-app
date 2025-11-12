import { createContext, useContext, useState, type ReactNode } from "react";

interface Board {
    id: number;
    name: string;
    description: string;
    tasksCount: number;
    membersCount: number;
}

interface BoardContextType {
    boards: Board[];
    selectedBoard: Board | null;
    isEditDialogOpen: boolean;
    setBoards: React.Dispatch<React.SetStateAction<Board[]>>;
    selectBoard: (board: Board | null) => void;
    editBoard: (boardId: number) => void;
    deleteBoard: (boardId: number) => void;
    updateBoard: (boardId: number, name: string, description: string) => void; 
    closeEditDialog: () => void;
}

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export function BoardProvider({ children }: { children: ReactNode }) {
    const [boards, setBoards] = useState<Board[]>([
        {
            id: 1,
            name: "Marketing Campaign",
            description: "Q4 marketing initiatives and campaigns",
            tasksCount: 8,
            membersCount: 5
        },
        {
            id: 2,
            name: "Product Development",
            description: "New feature development sprint",
            tasksCount: 12,
            membersCount: 7
        },
        {
            id: 3,
            name: "Design System",
            description: "UI/UX components library",
            tasksCount: 6,
            membersCount: 3
        },
        {
            id: 4,
            name: "Customer Support",
            description: "Support tickets and issues",
            tasksCount: 15,
            membersCount: 4
        }
    ]);

    const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const selectBoard = (board: Board | null) => {
        setSelectedBoard(board);
    };

    const editBoard = (boardId: number) => {
        const board = boards.find(b => b.id === boardId);
        if (board) {
            setSelectedBoard(board);
            setIsEditDialogOpen(true);
        }
    };

    const deleteBoard = (boardId: number) => {
        const board = boards.find(b => b.id === boardId);
        if (board && confirm(`Delete "${board.name}"?`)) {
            setBoards(prevBoards => prevBoards.filter(b => b.id !== boardId));
            console.log('Deleted board:', boardId);
        }
    };

    // ✨ Function update board
    const updateBoard = (boardId: number, name: string, description: string) => {
        setBoards(prevBoards =>
            prevBoards.map(board =>
                board.id === boardId
                    ? { ...board, name, description }
                    : board
            )
        );
        setIsEditDialogOpen(false);
        setSelectedBoard(null);
        console.log('Updated board:', boardId, name, description);
    };

    const closeEditDialog = () => {
        setIsEditDialogOpen(false);
        setSelectedBoard(null);
    };

    return (
        <BoardContext.Provider
            value={{
                boards,
                selectedBoard,
                isEditDialogOpen,
                setBoards,
                selectBoard,
                editBoard,
                deleteBoard,
                updateBoard,    
                closeEditDialog
            }}
        >
            {children}
        </BoardContext.Provider>
    );
}

export function useBoardContext() {
    const context = useContext(BoardContext);
    if (context === undefined) {
        throw new Error('useBoardContext must be used within a BoardProvider');
    }
    return context;
}