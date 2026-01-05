import { BoardDetailProvider } from "@/app/providers/BoardDetailProvider";
import { ListProvider, CardDetailProvider } from "@/app/providers/index";
import { BoardWidget } from "@/widgets/board/ui/BoardWidget";
import { LabelProvider } from "@/app/providers/LabelProvider";

export function BoardPage() {
    return (
        <BoardDetailProvider>
            <ListProvider>
                <CardDetailProvider>
                    <LabelProvider>
                        <BoardWidget />
                    </LabelProvider>
                </CardDetailProvider>
            </ListProvider>
        </BoardDetailProvider>
    )
}