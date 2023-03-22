import express from "express";
import { uploadByLink,upload} from "../controllers/place.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//GET
router.post("/upload", verifyToken, upload);
router.post("/upload-link", verifyToken, uploadByLink);
// router.get("/profile",profile);
export default router;