// src/pages/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { LogOut, User } from "lucide-react";

export default function Sidebar() {
    const { user, logout } = useAuth();

    // Function to style active link
    const linkClass = ({ isActive }) =>
        `px-3 py-2 rounded transition ${isActive ? "bg-white text-black font-semibold" : "hover:bg-gray-700"
        }`;

    return (
        <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg mt-[-3px]">
            {/* User Section */}
            <div className="flex items-center gap-3 px-6 py-4 text-lg font-semibold border-b border-gray-700">
                <User className="w-6 h-6 text-gray-300" />
                <span>{user ? user.name : "Guest"}</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 px-4 py-6 flex-grow">
                <NavLink to="/dashboard" className={linkClass}>
                    Dashboard
                </NavLink>

                {user?.role === "employee" && (
                    <>
                        <NavLink to="/profile" className={linkClass}>
                            Profile
                        </NavLink>
                        <NavLink to="/education" className={linkClass}>
                            Education
                        </NavLink>
                        <NavLink to="/annual-report" className={linkClass}>
                            Annual Report
                        </NavLink>
                    </>
                )}

                {user?.role === "reporting_officer" && (
                    <>
                        <NavLink to="/profile" className={linkClass}>
                            Profile
                        </NavLink>
                        <NavLink to="/education" className={linkClass}>
                            Education
                        </NavLink>
                        <NavLink to="/reports" className={linkClass}>
                            Reports
                        </NavLink>
                    </>
                )}

                {user?.role === "psb" && (
                    <>
                        <NavLink to="/profile" className={linkClass}>
                            Profile
                        </NavLink>
                        <NavLink to="/education" className={linkClass}>
                            Education
                        </NavLink>
                        <NavLink to="/reports" className={linkClass}>
                            Reports
                        </NavLink>
                        <NavLink to="/all-employees" className={linkClass}>
                            All Employees
                        </NavLink>
                    </>
                )}

                {user?.role === "secretary" && (
                    <>
                        <NavLink to="/profile" className={linkClass}>
                            Profile
                        </NavLink>
                        <NavLink to="/education" className={linkClass}>
                            Education
                        </NavLink>
                        <NavLink to="/reports" className={linkClass}>
                            Reports
                        </NavLink>
                        <NavLink to="/all-employees" className={linkClass}>
                            All Employees
                        </NavLink>
                        <NavLink to="/add-employee" className={linkClass}>
                            Add Employee
                        </NavLink>
                    </>
                )}

                {user?.role === "superadmin" && (
                    <>
                        <NavLink to="/profile" className={linkClass}>
                            Profile
                        </NavLink>
                        <NavLink to="/education" className={linkClass}>
                            Education
                        </NavLink>
                        <NavLink to="/reports" className={linkClass}>
                            Reports
                        </NavLink>
                        <NavLink to="/all-employees" className={linkClass}>
                            All Employees
                        </NavLink>
                        <NavLink to="/add-employee" className={linkClass}>
                            Add Employee
                        </NavLink>
                        <NavLink to="/admin-panel" className={linkClass}>
                            Admin Panel
                        </NavLink>
                    </>
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
