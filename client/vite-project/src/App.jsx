// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import Navbar from './pages/Navbar.jsx'
import Sidebar from './pages/Sidebar.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { useAuth } from './context/AuthContext.jsx'
import Profile from "./pages/Profile.jsx";
import Education from "./pages/Education.jsx";
import Reports from "./pages/Reports.jsx";
import AllEmployees from "./pages/AllEmployees.jsx";
import AddEmployee from "./pages/AddEmployee.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/login" element={<Login />} />
              (user && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/education" element={<Education />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/all-employees" element={<AllEmployees />} />
                <Route path="/add-employee" element={<AddEmployee />} />
                <Route path="/admin-panel" element={<AdminPanel />} />
              </>
              ))
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
