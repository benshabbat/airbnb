import express from "express";
import { uploadByLink} from "../controllers/place.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//GET
router.post("/upload-link", verifyToken, uploadByLink);
// router.get("/profile",profile);
export default router;