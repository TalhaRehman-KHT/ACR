import express from 'express';
import cors from "cors";
import pool from './config/db.js';
import dotenv from 'dotenv';

const app = express();
// Routers Paths
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

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

export default app;