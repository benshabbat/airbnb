import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js"
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import placeRoute from "./routes/places.js";
const app= express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use('/api/uploads', express.static('C:/Users/benshabbat/Desktop/Project_for_Portfolio/airbnb/api/uploads/'));
// app.use('/uploads', express.static(__dirname+'/uploads'));
app.use(cors({
    credentials :true,
    origin :"http://127.0.0.1:5173",
}))


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/places", placeRoute);

app.listen(8080, () => {
    connectDB();
    console.log("connected to backend!");
  });