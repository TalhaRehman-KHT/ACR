// src/pages/DashboardLayout.jsx
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function DashboardLayout() {
    const { user } = useAuth();

    // If not logged in → redirect to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}


            {/* Main content */}
            <main className="flex-1 p-6 overflow-hidden">

            </main>
        </div>
    );
}
