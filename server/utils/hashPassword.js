import bcrypt from "bcrypt";

// Hash password with salt rounds
export const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// Compare password with hash
export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
