const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");
const store = require("../middleware/multer");

//routes
route.get("/", controller.home );
route.post("/upload", store.array("images", 12), controller.upload )

module.exports = route;