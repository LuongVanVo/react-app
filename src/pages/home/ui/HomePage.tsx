import { HomeWidget } from "@/widgets/home/ui/HomeWidget";
import { UserWidget } from "@/widgets/home/ui/UserWidget";

export function HomePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <HomeWidget />
            <UserWidget />
        </div>
    )
}