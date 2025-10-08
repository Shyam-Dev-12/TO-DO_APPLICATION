import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import cookies from "cookie-parser";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcryptjs.genSalt(10);
  const encryptedPassword = await bcryptjs.hash(password, salt);

  const user = await User.create({ name, email, password:encryptedPassword});

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.matchPassword(password)) {
    let token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "4d",
    });

  res.cookie("jwt", token, {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });
  res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    message: "Login successful",

  });
 }else{
  res.status(400);
  throw new Error("Invalid email or password");
 }
};

const logout = (req, res) => {
  res.clearCookie("jwt", "",{
    httpOnly: true,
    expires:new Date(0)
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export { registerUser ,authUser,logout};
