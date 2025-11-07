import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth as useAuthApi } from "@/features/auth/login/model/useAuth";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
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

  // Đang tải...
  if (isAuthenticated === null) return <div>Loading...</div>;

  // Nếu CHƯA đăng nhập, đá về trang Login (/)
  if (isAuthenticated === false) return <Navigate to="/" replace />;

  // Nếu ĐÃ đăng nhập, hiển thị trang con (/home)
  return <>{children}</>;
}
