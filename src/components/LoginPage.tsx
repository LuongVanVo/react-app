import { LoginForm } from "@/modules/login/loginForm"
import backgroundLogin from "@/assets/img/background_login.jpg"

export default function LoginPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#0A0A0A]">
            {/* Login form  */}
            <div className="flex flex-col justify-center items-center p-6 md:p-12">
                <LoginForm />
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