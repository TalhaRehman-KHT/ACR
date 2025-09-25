// src/pages/EmployeeDashboard.jsx
import API from '../../api/axios.js'
import { useState } from "react";

const EmployeeDashboard = () => {
    const [task, setTask] = useState("");
    const [score, setScore] = useState("");
    const [remarks, setRemarks] = useState("");

    const handleSubmit = async () => {
        try {
            await API.post("/employee/submit-performance", {
                task_description: task,
                performance_score: score,
                remarks,
            });
            alert("Performance submitted!");
        } catch (err) {
            alert(err.response?.data?.error || "Error submitting performance");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Employee Dashboard</h1>
            <input
                type="text"
                placeholder="Task"
                className="border p-2 rounded mb-2 w-full"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <input
                type="number"
                placeholder="Score"
                className="border p-2 rounded mb-2 w-full"
                value={score}
                onChange={(e) => setScore(e.target.value)}
            />
            <textarea
                placeholder="Remarks"
                className="border p-2 rounded mb-2 w-full"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
            />
            <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Submit
            </button>
        </div>
    );
};

export default EmployeeDashboard;
