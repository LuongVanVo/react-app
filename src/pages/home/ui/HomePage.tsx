import { SideBar } from "@/shared/ui/SideBar/index";
import { HomeWidget } from "@/widgets/home/index";

export function HomePage() {
    return (
        <div className="flex">
            <SideBar />
            <HomeWidget />
        </div>
    )
}