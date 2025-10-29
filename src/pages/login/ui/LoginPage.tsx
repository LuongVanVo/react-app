import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LoginWidget } from "@/widgets/login"
import backgroundLogin from "@/shared/assets/img/background_login.jpg"
import Cookies from 'js-cookie';

export function LoginPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Kiểm tra nếu đã đăng nhập rồi thì redirect
        const existingToken = Cookies.get('accessToken');
        if (existingToken) {
            navigate('/home', { replace: true });
            return;
        }

        // Xử lý OAuth callback
        const success = searchParams.get('success');
        const error = searchParams.get('error');

        if (success === 'true') {
            // Delay nhỏ để đảm bảo cookie đã được set
            setTimeout(() => {
                const token = Cookies.get('accessToken');
                if (token) {
                    alert('Đăng nhập với Google thành công!');
                    navigate('/home', { replace: true });
                } else {
                    alert('Không thể lấy token. Vui lòng thử lại!');
                    navigate('/', { replace: true });
                }
            }, 500); // Tăng delay lên 500ms
        }

        if (error === 'auth_failed') {
            alert('Đăng nhập với Google thất bại. Vui lòng thử lại!');
            navigate('/', { replace: true });
        }
    }, [searchParams, navigate]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#0A0A0A]">
            {/* Login form  */}
            <div className="flex flex-col justify-center items-center p-6 md:p-12">
                <LoginWidget />
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