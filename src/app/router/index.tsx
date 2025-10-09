import { RegisterPage } from "@/pages/register/ui/RegisterPage"
import { LoginPage } from "@/pages/login/ui/LoginPage"
import { createBrowserRouter } from "react-router-dom"
import { InputOTPForm } from "@/features/auth/login/ui/FormInputOTP"
import { HomePage } from "@/pages/home/ui/HomePage"

console.log(RegisterPage, LoginPage)

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/inputCode",
        element: <InputOTPForm />
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: '*',
        element: <div>404 - Page Not Found</div>
    }
], {
    basename: '/react-app'
})