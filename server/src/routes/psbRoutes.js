import express from "express";
import { authorizedRole, protect } from "../middlewares/authorizedRole.js";
import { psbDashboard } from "../controllers/psbController.js";


const psbRouter = express.Router();

psbRouter.get(
    "/dashboard",
    protect,
    authorizedRole("psb"),
    psbDashboard
);

export default psbRouter;
