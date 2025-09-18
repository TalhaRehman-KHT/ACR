import express from 'express';
import cors from "cors";

import pool from './config/db.js';
const app = express();
import dotenv from 'dotenv';
// Routers Paths
import authRouter from './routes/authRouter.js';

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

export default app;