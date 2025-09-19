// routes/reportingRoutes.js
import express from "express";
import { authorizedRole, protect } from "../middlewares/authorizedRole.js";
import { reportingDashboard } from "../controllers/reportingController.js";



const reportingRouter = express.Router();

reportingRouter.get(
    "/dashboard",
    protect,
    authorizedRole("reporting_officer"),
    reportingDashboard
);

export default reportingRouter;
