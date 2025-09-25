// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { LogOut, User } from "lucide-react"; // ✅ import both icons

export default function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
            {/* Brand */}
            <Link to="/" className="text-2xl font-bold tracking-wide">
                ACR
            </Link>

            {/* Right Side */}
            <div>
                {!user ? (
                    <button
                        onClick={() => navigate("/login")}
                        className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition"
                    >
                        Login
                    </button>
                ) : (
                    <div className="flex items-center gap-4">
                        {/* User icon + name */}
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-gray-300" />
                            <span className="text-gray-200 font-medium">{user.name}</span>
                        </div>

                        {/* Logout button */}

                    </div>
                )}
            </div>
        </nav>
    );
}
