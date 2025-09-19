// routes/employeeRoutes.js
import express from "express";
import { authorizedRole, protect } from "../middlewares/authorizedRole.js";
import { employeeDashboard } from "../controllers/employeeController.js";


const employeeRouter = express.Router();

employeeRouter.get(
    "/dashboard",
    protect,
    authorizedRole("employee"),
    employeeDashboard
);

export default employeeRouter;
