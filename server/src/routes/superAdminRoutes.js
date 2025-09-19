import express from "express";
import { authorizedRole, protect } from "../middlewares/authorizedRole.js";
import { superAdminDashboard } from "../controllers/superAdminController.js";


const superAdminRouter = express.Router();

superAdminRouter.get(
    "/dashboard",
    protect,
    authorizedRole("superadmin"),
    superAdminDashboard
);

export default superAdminRouter;
