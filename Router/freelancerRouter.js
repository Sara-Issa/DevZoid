const express = require("express");
const freelancerController = require("../Controller/freelancerController");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .get(freelancerController.allFreelancer)
  .post(
    verifyToken,
    upload.single("image"),
    freelancerController.saveFreelancer
  );

router
  .route("/:id")
  .put(verifyToken, upload.single("image"), freelancerController.editFreelancer)
  .delete(verifyToken, freelancerController.deleteFreelancer)
  .get(freelancerController.findFreelancer);

module.exports = router;
