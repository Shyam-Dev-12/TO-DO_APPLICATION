import express from "express";
import {
  registerUser,
  authUser,
  logout,
} from "../controllers/userControllers.js";

// Register a user
const userRouter = express.Router();

userRouter.post("/", registerUser);

userRouter.post("/auth", authUser);

userRouter.post("/logout", logout);

export default userRouter;
