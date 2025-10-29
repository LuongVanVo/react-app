import { useAuth } from "@/features/auth/login/model/useAuth";
import type { ApiError } from "@/features/auth/login/api/type";
    
export function HomeWidget() {
    const { logout } = useAuth();
    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            const apiError = err as ApiError;
            alert(apiError.message);
        }
    };
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <header className="flex justify-between items-center mb-8 bg-white rounded-lg shadow p-6">
                <h1 className="text-3xl font-bold text-gray-800">Home</h1>
                <button
                    onClick={ handleLogout }
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                    Logout
                </button>
            </header>

            {/* Main Content */}
            <main className="bg-white rounded-lg shadow p-8">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Welcome to Home Page!
                    </h2>
                    <p className="text-gray-600 mb-6">
                        You have successfully logged in.
                    </p>
                </div>
            </main>
        </div>
    )
}