import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth as useAuthApi } from "@/features/auth/login/model/useAuth";

interface AuthRedirectProps {
  children: React.ReactNode;
}

export function AuthRedirect({ children }: AuthRedirectProps) {
  const { checkMe } = useAuthApi();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkStatus() {
      try {
        await checkMe();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    }
    checkStatus();
  }, [checkMe]);

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (isAuthenticated === true) return <Navigate to="/home" replace />;

  return <>{children}</>;
}
