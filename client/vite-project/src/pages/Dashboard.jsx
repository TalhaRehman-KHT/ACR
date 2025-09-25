// src/pages/Dashboard.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import EmployeeDashboard from "./Dashboards/EmployeeDashboard.jsx";
import ReportingOfficerDashboard from "./Dashboards/ReportingOfficerDashboard.jsx";
import DirectorDashboard from "./Dashboards/DirectorDashboard.jsx";
import PsbDashboard from "./Dashboards/PsbDashboard.jsx";
import SecretaryDashboard from "./Dashboards/SecretaryDashboard.jsx";
import SuperAdminDashboard from "./Dashboards/SuperAdminDashboard.jsx";


const Dashboard = () => {
    const { user } = useContext(AuthContext);

    if (!user) return <p>Please login</p>;

    switch (user.role) {
        case "employee":
            return <EmployeeDashboard />;
        case "reporting_officer":
            return <ReportingOfficerDashboard />;
        case "director":
            return <DirectorDashboard />;
        case "psb":
            return <PsbDashboard />;
        case "secretary":
            return <SecretaryDashboard />;
        case "superadmin":
            return <SuperAdminDashboard />;
        default:
            return <p>No dashboard for role {user.role}</p>;
    }
};

export default Dashboard;
