import imageDownloader from "image-downloader";
import fs from "fs";
import Place from "../models/Place.js";
import User from "../models/User.js";

export const uploadByLink = async (req, res, next) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  try {
    await imageDownloader.image({
      url: link,
      dest:
        "C:/Users/benshabbat/Desktop/Project_for_Portfolio/airbnb/api/uploads/" +
        newName,
    });
    res.json(newName);
  } catch (error) {
    next(error);
  }
};

export const upload = async (req, res, next) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    // const parts = originalname.split(".");
    // const ext = parts[parts.length - 1];
    // const newPath = path + "." + ext;
    // fs.renameSync(path, newPath);
    // uploadedFiles.push(newPath.replace("uploads", ""));
    uploadedFiles.push(originalname);
  }
  res.json(uploadedFiles);
};

export const createPlace = async (req, res, next) => {
  const userId = req.params.userId;
  const newPlace = new Place({...req.body, owner: userId});
  try {
    const savedPlace = await newPlace.save();
    try{
      await User.findByIdAndUpdate(userId, {
        $push:{places:[savedPlace._id]}
      })
    }catch(err){
      next(err);
    }
    res.status(200).json(savedPlace);
  } catch (err) {
    next(err);
  }
};

export const getPlace = async (req, res, next) => {
  try {
    const place = await Place.find({owner:req.params.id});
    res.status(200).json(place);
  } catch (error) {
    next(error);
  }
};
export const getPlaces = async (req, res, next) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
};