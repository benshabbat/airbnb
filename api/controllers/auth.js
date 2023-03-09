import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  // //Check if User Exist
  const userExists = await User.findOne({ username });
  if (userExists) return next(createError(400, "User already Exists"));

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    // Create user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(200).json({
      _id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Check for user username
    const user = await User.findOne({ email });

    if (!user) return next(createError(404, "User not found!"));

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT
    );

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        _id: user.id,
        email: user.email,
        username: user.username,
      });
  } catch (error) {
    next(error);
  }
};

//logout
export const logout = async (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};

// Generate JWT
const generateToken = (id, isAdmin) => {
  return jwt.sign(
    { id, isAdmin },
    process.env.JWT
    // {expiresIn: "30d",}
  );
};
