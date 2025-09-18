import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, role: user.role }, // payload
        process.env.JWT_SECRET,           // secret key
        { expiresIn: "1d" }               // valid for 1 day
    );
};
