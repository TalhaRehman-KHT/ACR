// controllers/userController.js
import { generateToken } from "../../utils/generateToken.js";
import { comparePassword, hashPassword } from "../../utils/hashPassword.js";
import pool from "../config/db.js";

// ✅ Only PSB,  should create accounts
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
            token: generateToken(user), // optional
        });
    } catch (error) {
        console.error("❌ Error creating user:", error.message);
        res.status(500).json({ error: error.message });
    }
};

// ✅ Login for any user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (result.rows.length === 0) {
            return res.status(400).json({ error: "User not found" });
        }

        const user = result.rows[0];
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = generateToken(user);

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.error("❌ Error logging in:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, role, password } = req.body;

        // If password is provided, hash it
        let hashedPassword = null;
        if (password) {
            hashedPassword = await hashPassword(password);
        }

        const result = await pool.query(
            `UPDATE users 
             SET 
                name = COALESCE($1, name), 
                email = COALESCE($2, email), 
                role = COALESCE($3, role),
                password = COALESCE($4, password)
             WHERE id = $5 
             RETURNING *`,
            [name, email, role, hashedPassword, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            message: "User updated successfully",
            user: {
                id: result.rows[0].id,
                name: result.rows[0].name,
                email: result.rows[0].email,
                role: result.rows[0].role,
            }
        });
    } catch (error) {
        console.error("❌ Error updating user:", error.message);
        res.status(500).json({ error: error.message });
    }
};

// ✅ Delete user (only higher roles allowed)
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query("DELETE FROM users WHERE id=$1 RETURNING *", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            user: result.rows[0],
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
