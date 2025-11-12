import { SideBar } from "@/widgets/SideBar/index";
import { HomeWidget } from "@/widgets/home/index";
import { BoardProvider } from "@/widgets/home/components/context/BoardContext";

export function HomePage() {
    return (
        <div className="flex">
            <SideBar />
            <BoardProvider>
                <HomeWidget />
            </BoardProvider>
        </div>
    )
}