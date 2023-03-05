import express from "express";
import cors from "cors"
import authRoute from "./routes/auth.js";
const app= express();

app.use(express.json());
app.use(cors({
    credentials :true,
    origin :"http://127.0.0.1:5173",
}))


app.use("/api/auth", authRoute);
app.get("/test",(req,res)=>{
    res.json("test ok")
})
app.post("/register",(req,res)=>{
    const {fullName,email,password} = req.body
    res.json({fullName,email,password})
})

app.listen(8080)