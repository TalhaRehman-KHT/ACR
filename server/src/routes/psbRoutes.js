import express from "express";
import { authorizedRole, protect } from "../middlewares/authorizedRole.js";
import { psbDashboard } from "../controllers/psbController.js";
import { createUser, updateUser } from "../controllers/userController.js";


const psbRouter = express.Router();

psbRouter.get("/dashboard", protect, authorizedRole("psb"), psbDashboard);
// 
psbRouter.post('/createUser', protect, authorizedRole('psb'), createUser)
psbRouter.put('/update/:id', protect, authorizedRole('psb'), updateUser)


export default psbRouter;
