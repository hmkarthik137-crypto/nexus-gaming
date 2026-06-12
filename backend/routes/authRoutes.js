import express from "express";
import User from "../models/User.js";
import Order from "../models/order.js";
import authMiddleware from "../middleware/authMiddleware.js";

import {
    register,
    login
} from "../controllers/authController.js";

const router = express.Router();

// REGISTER
router.post(
    "/register",
    register
);

// LOGIN
router.post(
    "/login",
    login
);

export default router;
