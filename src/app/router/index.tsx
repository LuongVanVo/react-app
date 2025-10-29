import { RegisterPage } from "@/pages/register/ui/RegisterPage"
import { LoginPage } from "@/pages/login/ui/LoginPage"
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom"
import { InputOTPForm } from "@/features/auth/login/ui/FormInputOTP"
import { HomePage } from "@/pages/home/ui/HomePage"
import { AuthRedirect } from "./AuthRedirect"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={
                <AuthRedirect>
                    <LoginPage />
                </AuthRedirect>
            }></Route>
            <Route path="/register" element={
                <AuthRedirect>
                    <RegisterPage />
                </AuthRedirect>
            }></Route>
            <Route path="/input-otp" element={
                <AuthRedirect>
                    <InputOTPForm />
                </AuthRedirect>
            }></Route>
            <Route path="/home" element={
                <AuthRedirect>
                    <HomePage />
                </AuthRedirect>
            }></Route>
            
            {/* 404 */}
            <Route path="*" element={
                 <div className="min-h-screen flex items-center justify-center">
                 <div className="text-center">
                   <h1 className="text-6xl font-bold">404</h1>
                   <p className="text-xl mt-4">Page Not Found</p>
                    </div>
                </div>
            }></Route>
        </Routes>
    )
}