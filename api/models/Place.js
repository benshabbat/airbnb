import mongoose from "mongoose";
const { Schema, SchemaTypes } = mongoose;

const PlaceSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);
export default mongoose.model("Place", PlaceSchema);
