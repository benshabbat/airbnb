import mongoose from "mongoose";
const { Schema, SchemaTypes } = mongoose;

const PlaceSchema = new mongoose.Schema(
  {
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    perks: {
      type: [String],
      required: true,
    },
    extraInfo: {
      type: String,
      required: true,
    },
    checkIn: {
      type: String,
      required: true,
    },
    checkOut: {
      type: String,
      required: true,
    },
    maxGuests: {
      type: String,
      default:1,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Place", PlaceSchema);
