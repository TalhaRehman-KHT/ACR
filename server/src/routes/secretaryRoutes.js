import express from "express";
import { authorizedRole, protect } from "../middlewares/authorizedRole.js";
import { secretaryDashboard } from "../controllers/secretaryController.js";
const secretaryrouter = express.Router();

secretaryrouter.get(
    "/dashboard",
    protect,
    authorizedRole("secretary"),
    secretaryDashboard
);

export default secretaryrouter;
