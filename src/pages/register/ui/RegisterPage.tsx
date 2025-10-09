import { RegisterWidget } from "@/widgets/register/ui/RegisterWidget"
import backgroundLogin from "@/shared/assets/img/background_login.jpg"
    
export function RegisterPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#0A0A0A]">
            {/* Login form  */}
            <div className="flex flex-col justify-center items-center p-6 md:p-12">
                <RegisterWidget />
            </div>

            {/* Picture */}
            <div className="hidden md:block relative overflow-hidden">
                <img 
                    className="w-full h-screen object-cover" 
                    src={backgroundLogin} 
                    alt="image" 
                />
            </div>
        </div>
    )
}