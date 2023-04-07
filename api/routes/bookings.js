import express from "express";
import {createBooking,getBookings} from "../controllers/booking.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:userId",verifyToken,createBooking);
router.get("/",verifyToken,getBookings);

export default router;