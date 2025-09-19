import express from 'express';
import cors from "cors";
import pool from './config/db.js';
import dotenv from 'dotenv';

const app = express();
// Routers Paths
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import employeeRouter from './routes/employeeRoutes.js';
import reportingRouter from './routes/reportingRoutes.js';
import psbRouter from './routes/psbRoutes.js';
import directorRouter from './routes/directorRoutes.js';
import secretaryrouter from './routes/secretaryRoutes.js';
import superAdminRouter from './routes/superAdminRoutes.js';

const PORT = process.env.PORT || 5000;

// Test connection on startup
(async () => {
    try {
        const res = await pool.query("SELECT NOW()");
        console.log("📅 Database time:", res.rows[0].now);
    } catch (err) {
        console.error("❌ Database test failed:", err.message);
    }
})();

// Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes 
app.use('/api/v1', authRouter)
app.use('/api/v1/user', userRouter)

// 
app.use('/api/v1/employee', employeeRouter)
app.use('/api/v1/reporting', reportingRouter)
app.use('/api/v1/director', directorRouter)
app.use('/api/v1/psb', psbRouter)
app.use('/api/v1/secretary', secretaryrouter)
app.use('/api/v1/superadmin', superAdminRouter)

export default app;