import { generateToken } from "../../utils/generateToken.js";
import { hashPassword } from "../../utils/hashPassword.js";
import pool from "../config/db.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Hash password
        const hashedPassword = await hashPassword(password);

        const result = await pool.query(
            "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, email, hashedPassword, role]
        );

        const user = result.rows[0];

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token: generateToken(user),
        });
        console.log(user)
    } catch (error) {
        console.error("❌ Error creating user:", error.message);
        res.status(500).json({ error: error.message });
    }
};