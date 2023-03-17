import imageDownloader from "image-downloader"

export const uploadByLink = async (req, res, next) => {
    const {link}= req.body
    const newName = Date.now() +".jpg"
    await imageDownloader.image({
        url: link,
        dest:__dirname + "/uploads/"+newName,
    })
    res.json(__dirname + "/uploads/"+newName)
  };