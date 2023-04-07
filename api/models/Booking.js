import mongoose from "mongoose";
const { Schema, SchemaTypes } = mongoose;

const BookingSchema = new mongoose.Schema(
  {
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    place: {
      type: SchemaTypes.ObjectId,
      ref: "Place",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      required: true,
    },
    maxGuests: {
      type: Number,
      default: 1,
      required: true,
    },
    price: {
      type: Number,
      default: 50,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Booking", BookingSchema);
