import imageDownloader from "image-downloader";
import fs from "fs";

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
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace("uploads", ""));
  }
  res.json(uploadedFiles);
};
