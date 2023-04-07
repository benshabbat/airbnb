import mongoose from "mongoose";
const { Schema,SchemaTypes } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    places: {
      type: [{type:SchemaTypes.ObjectId,ref:'Place'}]
    },
    bookings: {
      type: [{type:SchemaTypes.ObjectId,ref:'Booking'}]
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", UserSchema);