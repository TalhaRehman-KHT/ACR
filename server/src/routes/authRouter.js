import express from 'express'
import { testing } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.get('/test', testing);

export default authRouter;