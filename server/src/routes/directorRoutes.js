import express from "express";
import { authorizedRole, protect } from "../middlewares/authorizedRole.js";
import { directorDashboard } from "../controllers/directorController.js";


const directorRouter = express.Router();

directorRouter.get(
    "/dashboard",
    protect,
    authorizedRole("director"),
    directorDashboard
);

export default directorRouter;
