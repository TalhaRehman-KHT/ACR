// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import Navbar from './pages/Navbar.jsx'
import Sidebar from './pages/Sidebar.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Navbar always visible */}
        <Navbar />

        <div className="flex">
          {/* Sidebar only for logged-in users */}
          <Sidebar />

          {/* Main Routes */}
          <main className="flex-1 p-4">
            <Routes>
              {/* Default route → redirect to /dashboard */}
              {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}

              {/* Login Page */}
              <Route path="/login" element={<Login />} />

              {/* Dashboard Page */}
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
