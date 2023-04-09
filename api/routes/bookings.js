import express from "express";
import {createBooking,getBookings,getBookingsByOwner,getBooking} from "../controllers/booking.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:userId",verifyToken,createBooking);
//GET all for owner
//GET
router.get("/booking/:id",verifyToken, getBooking);
router.get("/:ownerId",verifyToken, getBookingsByOwner);
router.get("/",verifyToken,getBookings);

export default router;