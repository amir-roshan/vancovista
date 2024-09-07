import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Hash the Password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        // Create a New User & Save it to DB
        const newUser = await prisma.user.create({
            data: {
                username, email, password: hashedPassword,
            }
        });

        console.log(newUser);

        res.status(201).json({ message: "User created successfully." }); // 201 Created
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create user" });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if the user exists or not
        const user = await prisma.user.findUnique({ where: { username } }); // Where username = username

        if (!user) res.status(401).json({ message: "Inavlid Credentials!" }); // 401 Unauthorized

        // Check if the user's password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) return res.status(401).json({ message: "Inavlid Credentials!" }); // 401 Unauthorized

        // Generate a Cookie Token

        // res.setHeader("Set-Cookie", "test=" + "myValue").json({ message: "Success" });
        const AGE = 1000 * 60 * 60 * 24 * 7; // A Week

        const token = jwt.sign({
            id: user.id
        }, process.env.JWT_SECRET_KEY, { expiresIn: AGE });

        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            maxAge: AGE
        }).status(200).json({ message: "Login Successful" }); // 200 OK
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login!" });
    }
};

export const logout = (req, res) => {
    // Deleting Token
    res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};