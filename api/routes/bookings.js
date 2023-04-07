import express from "express";
import {createBooking,getBookings,getBookingsByOwner} from "../controllers/booking.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:userId",verifyToken,createBooking);
//GET all for owner
router.get("/:ownerId", getBookingsByOwner);
router.get("/",verifyToken,getBookings);

export default router;