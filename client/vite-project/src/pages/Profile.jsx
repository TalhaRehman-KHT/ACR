// src/pages/Profile.jsx
import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Edit } from "lucide-react"; // ✅ Import edit icon

export default function Profile() {
    const { user } = useAuth();

    if (!user) {
        return <p className="text-center text-gray-600">Please log in to view profile.</p>;
    }

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 relative">
            {/* Title with Edit Button */}
            <div className="flex justify-between items-center border-b pb-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
                <button
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    onClick={() => alert("Edit profile clicked!")} // 🔥 replace with modal later
                >
                    <Edit className="w-4 h-4" />
                    Edit Profile
                </button>
            </div>

            {/* User Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <p className="text-gray-500 text-sm">Full Name</p>
                    <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                </div>

                {/* Email */}
                <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-lg font-semibold text-gray-800">{user.email}</p>
                </div>

                {/* Role */}
                <div>
                    <p className="text-gray-500 text-sm">Role</p>
                    <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                        {user.role}
                    </span>
                </div>

                {/* Department (optional if available) */}
                {user.department && (
                    <div>
                        <p className="text-gray-500 text-sm">Department</p>
                        <p className="text-lg font-semibold text-gray-800">{user.department}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
