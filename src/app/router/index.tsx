import { RegisterPage } from "@/pages/register/ui/RegisterPage"
import { LoginPage } from "@/pages/login/ui/LoginPage"
import { createBrowserRouter } from "react-router-dom"

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
        path: '*',
        element: <div>404 - Page Not Found</div>
    }
], {
    basename: '/react-app'
})