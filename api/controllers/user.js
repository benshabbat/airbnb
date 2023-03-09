import User from "../models/User.js";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const getUser = async (req, res, next) => {
  try {
    const { _id, username, email } = await User.findById(req.params.id);
    res.status(200).json({ _id, username, email });
  } catch (error) {
    next(error);
  }
};
// export const profile =  (req, res, next) => {
//   const {token} = req.cookies.access_token;
//   if (token) {
//     jwt.verify(token, process.env.JWT, async (err, user) => {
//       if (err) return next(createError(403, "Token is not valid!"));
//       const {_id,username,email} = await User.findById(user.id);
//       res.json({_id,username,email});
//     });
//   } else {
//     res.json(null);
//   }
// };
