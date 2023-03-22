import imageDownloader from "image-downloader";
import multer from "multer"

export const uploadByLink = async (req, res, next) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  try {
    await imageDownloader.image({
      url: link,
      dest: "C:/Users/benshabbat/Desktop/Project_for_Portfolio/airbnb/api/uploads/" + newName,
    });
    res.json(newName);
  } catch (error) {
    next(error);
  }
};
export const upload = async (req, res, next) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  try {
    await imageDownloader.image({
      url: link,
      dest: "C:/Users/benshabbat/Desktop/Project_for_Portfolio/airbnb/api/uploads/" + newName,
    });
    res.json(newName);
  } catch (error) {
    next(error);
  }
};
