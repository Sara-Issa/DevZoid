const express = require("express");
const router = express.Router();
const clientController = require("./../Controller/clientController");
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
  


// add
router.route("/")
.post(  verifyToken, upload.single("image"), clientController.saveClient)

// get

router.route("/:id")
.get(clientController.findClient)
.put(verifyToken, upload.single("image"), clientController.editClient)
.delete(verifyToken, clientController.deleteClient)


module.exports = router;