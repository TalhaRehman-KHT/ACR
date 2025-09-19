import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';


// ✅ Verify JWT & attach user to request
export const protect = (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            // Decode token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Attach user info (id, role) to request
            req.user = decoded;

            next();
        } catch (error) {
            return res.status(401).json({ message: "Not authorized, invalid token" });
        }
    }

    if (!token) {
        return res.status(401).json({ message: "No token, not authorized" });
    }
};


// ✅ Role-based access control
export const authorizedRole = (...allowedRoles) => {
    return (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json({ message: "Not authorized" });
            }

            if (!allowedRoles.includes(req.user.role)) {
                return res
                    .status(403)
                    .json({ message: `Access denied for role: ${req.user.role}` });
            }

            next(); // User has valid role
        } catch (error) {
            console.error("❌ Role check error:", error.message);
            res.status(500).json({ error: "Server error in role check" });
        }
    };
};
