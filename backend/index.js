import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import TodoRouter from "./routes/todoRoutes.js";
import user from "./models/userModel.js"
import User from "./models/userModel.js";
import bcryptjs from "bcryptjs";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { errorHandler,notFound } from "./middleware/errorHandler.js";

connectDB();
const port = process.env.PORT || 8000;

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, // Allow cookies to be sent with requests
}));

app.use(express.json()); 
app.use(cookieParser());

app.use("/api/todo/", TodoRouter);
app.use("/api/user/", userRouter);

app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
