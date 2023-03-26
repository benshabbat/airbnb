import express from "express";
import { uploadByLink,upload,createPlace} from "../controllers/place.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
import multer from "multer"
const router = express.Router();
const photosMiddleware = multer({dest:'/uploads'})

//CREATE
router.post("/upload",photosMiddleware.array("photos",100), verifyToken, upload);
router.post("/upload-link", verifyToken, uploadByLink);
router.post("/:userId",verifyToken,createPlace);
// router.get("/profile",profile);
export default router;