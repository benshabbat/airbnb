import express from "express";
import { uploadByLink,upload,createPlace, getPlace, getPlaces} from "../controllers/place.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
import multer from "multer"
const router = express.Router();
const photosMiddleware = multer({dest:'/uploads'})

router.post("/upload",photosMiddleware.array("photos",100), verifyToken, upload);
router.post("/upload-link", verifyToken, uploadByLink);
//CREATE
router.post("/:userId",verifyToken,createPlace);
//GET
router.get("/:id", getPlace);
//GET ALL
router.get("/", getPlaces);
// router.get("/profile",profile);
export default router;