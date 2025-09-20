import express from "express";
import { authorizedRole, protect } from "../middlewares/authorizedRole.js";
import { superAdminDashboard } from "../controllers/superAdminController.js";
import { createUser, deleteUser, updateUser } from "../controllers/userController.js";


const superAdminRouter = express.Router();

superAdminRouter.get("/dashboard", protect, authorizedRole("superadmin"), superAdminDashboard);
// 
superAdminRouter.post('/createUser', protect, authorizedRole('superadmin'), createUser)
superAdminRouter.put('/update/:id', protect, authorizedRole('superadmin'), updateUser)
superAdminRouter.delete('/delete/:id', protect, authorizedRole('superadmin'), deleteUser)

export default superAdminRouter;
