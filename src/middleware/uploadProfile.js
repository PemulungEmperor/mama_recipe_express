const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./thefrontend/public/img/userPhoto");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    callback(null, Date.now() + "_" + name);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    const error = "Only jpg, jpeg, png allowed!";
    cb(error, false);
  }
};

const multerUploadProfile = multer({ storage, fileFilter, limits: { fileSize: 3 * 1024 * 1024 } }).single("photoPath");

module.exports = multerUploadProfile;
