// src/pages/AddEmployee.jsx
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx"; // ✅ get token from context

export default function AddEmployee() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const { token } = useAuth(); // ✅ AuthContext gives us token

    const handleAddEmployee = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3000/api/v1/superadmin/createUser",
                { name, email, password, role }, // backend expects "name"
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ send token
                    },
                }
            );

            alert("✅ Employee created successfully!");
            console.log(data);

            // reset form
            setName("");
            setEmail("");
            setPassword("");
            setRole("");
        } catch (err) {
            console.error("❌ Create employee error:", err.response?.data);
            alert(err.response?.data?.error || "❌ Failed to create employee");
        }
    };

    return (
        <div className="flex items-center justify-center bg-transparent">
            <form
                onSubmit={handleAddEmployee}
                className="form-container w-96 space-y-5"
            >
                <h2 className="form-title">Add Employee</h2>

                {/* Name */}
                <div className="form-group">
                    <label className="form-label required">Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        className="input-field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                {/* Email */}
                <div className="form-group">
                    <label className="form-label required">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div className="form-group">
                    <label className="form-label required">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Role */}
                <div className="form-group">
                    <label className="form-label required">Role</label>
                    <select
                        className="input-field bg-gray-800"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="">Select role</option>
                        <option value="employee">employee</option>
                        <option value="reporting-officer">reporting-officer</option>
                        <option value="director">director</option>
                        <option value="psb">psb</option>
                        <option value="secretary">secretary</option>
                    </select>
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary">
                    Add Employee
                </button>
            </form>
        </div>
    );
}
