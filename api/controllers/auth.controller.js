import bcrypt from "bcrypt";

export const register = async (req, res) => {
    const { userName, email, password } = req.body;

    // Hash the Password

    // Create a New User & Save it to DB
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);
};

export const login = (req, res) => {
    // DB operations
};

export const logout = (req, res) => {
    // DB operations
};