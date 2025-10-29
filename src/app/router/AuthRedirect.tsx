import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

interface AuthRedirectProps {
    children: React.ReactNode;
}

export function AuthRedirect({ children }: AuthRedirectProps) {
    const accessToken = Cookies.get('accessToken');

    if (accessToken) {
        return <Navigate to="/home" replace />
    }

    return <>{children}</>
}