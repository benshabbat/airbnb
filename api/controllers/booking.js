import Booking from "../models/Booking.js";

export const createBooking = async (req, res, next) => {
  const userId = req.params.userId;
  const newBooking = new Booking({ ...req.body, owner: userId });
  try {
    const savedBooking = await newBooking.save();
    try {
      await User.findByIdAndUpdate(userId, {
        $push: { bookings: [savedBooking._id] },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedBooking);
  } catch (err) {
    next(err);
  }
};
export const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};
export const getBooking = async (req, res, next) => {
  try {
    const bookings = await Booking.findById(req.params.id).populate("owner").populate("place");
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};
export const getBookingsByOwner = async (req, res, next) => {
  try {
    const bookings = await Booking.find({owner:req.params.ownerId}).populate("owner").populate("place");
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};