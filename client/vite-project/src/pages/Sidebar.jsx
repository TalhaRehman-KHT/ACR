// src/pages/Sidebar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { LogOut, User } from "lucide-react"; // ✅ import both

export default function Sidebar() {
    const { user, logout } = useAuth();

    return (
        <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg mt-[-3px]">
            {/* User Section */}
            <div className="flex items-center gap-3 px-6 py-4 text-lg font-semibold border-b border-gray-700">
                <User className="w-6 h-6 text-gray-300" />
                <span>{user ? user.name : "Guest"}</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 px-4 py-6 flex-grow">
                <Link
                    to="/dashboard"
                    className="px-3 py-2 rounded hover:bg-gray-700 transition"
                >
                    Dashboard
                </Link>

                {/* Role-specific links */}
                {user?.role === "employee" && (
                    <Link to="/tasks" className="px-3 py-2 rounded hover:bg-gray-700">
                        My Tasks
                    </Link>
                )}
                {user?.role === "psb" && (
                    <Link to="/manage-users" className="px-3 py-2 rounded hover:bg-gray-700">
                        Manage Users
                    </Link>
                )}
                {user?.role === "secretary" && (
                    <Link to="/reports" className="px-3 py-2 rounded hover:bg-gray-700">
                        Reports
                    </Link>
                )}
                {user?.role === "superadmin" && (
                    <Link to="/admin-panel" className="px-3 py-2 rounded hover:bg-gray-700">
                        Admin Panel
                    </Link>
                )}
            </nav>

            {/* Footer (Logout) */}
            {user && (
                <div className="px-4 py-4 border-t border-gray-700">
                    <button
                        onClick={logout}
                        className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded transition"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            )}
        </aside>
    );
}
