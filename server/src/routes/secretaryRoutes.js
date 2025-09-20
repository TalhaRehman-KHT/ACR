import express from "express";
import { authorizedRole, protect } from "../middlewares/authorizedRole.js";
import { secretaryDashboard } from "../controllers/secretaryController.js";
import { createUser, deleteUser, updateUser } from "../controllers/userController.js";
const secretaryRouter = express.Router();

secretaryRouter.get("/dashboard", protect, authorizedRole("secretary"), secretaryDashboard);

secretaryRouter.post('/createUser', protect, authorizedRole('secretary'), createUser)
secretaryRouter.put('/update/:id', protect, authorizedRole('secretary'), updateUser)
secretaryRouter.delete('/update/:id', protect, authorizedRole('secretary'), deleteUser)

export default secretaryRouter;
