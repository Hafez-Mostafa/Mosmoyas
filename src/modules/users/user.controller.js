import { where } from "sequelize"
import userModel from "../../../db/models/userModel.js"

import bcrypt from 'bcrypt';




// 4- Implement routes and controllers for user registration, login,  and logout. (email must be unique)

export const getUsers = async (req, res, next) => {
    const users = await userModel.findAll({
        attributes: { exclude: ['password','createdAt','updatedAt'] }
    })
    res.status(201).json({ users })
}

// 4 - Implement routes and controllers for user registration, login,
//     and logout. (email must be unique)

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check if a user with the given email already exists
        const existingUser = await userModel.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create a new user if the email is not in use
        const registeredUser = await userModel.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: "User created successfully", registeredUser });
    } catch (error) {
        console.error("Error registering user:", error);
        next(error); // Pass the error to the next middleware
    }
};



export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if a user with the given email exists
        const existingUser = await userModel.findOne({ where: { email } });

        if (!existingUser) {
            return res.status(400).json({ message: "User not found" });
        }

        // Check if the provided password matches the stored hash
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "User logged in successfully", userId: existingUser.id });
    } catch (error) {
        console.error("Error retrieving user:", error);
        next(error); // Pass the error to the next middleware
    }
};