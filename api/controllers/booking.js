import Booking from "../models/Booking.js";

export const createBooking = async (req, res, next) => {
    const userId = req.params.userId;
    const newBooking = new Booking({...req.body,user:userId});
    try {
      const savedBooking = await newBooking.save();
      try{
        await User.findByIdAndUpdate(userId, {
          $push:{bookings:[savedBooking._id]}
        })
      }catch(err){
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
  