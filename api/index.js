import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./config/db.js"
// import authRoute from "./routes/auth.js";
const app= express();
dotenv.config();


app.use(express.json());
app.use(cors({
    credentials :true,
    origin :"http://127.0.0.1:5173",
}))


// app.use("/api/auth", authRoute);
app.get("/test",(req,res)=>{
    res.json("test ok")
})
app.post("/register",(req,res)=>{
    const {username,email,password} = req.body
    res.json({username,email,password})
})

app.listen(8080, () => {
    connectDB();
    console.log("connected to backend!");
  });