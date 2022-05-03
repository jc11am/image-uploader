const multer = require("multer");



//set storage
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "upload")
    },
    filename: function(req,file,cb){
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));

        cb(null, file.filename + "-" + Date.now()+ext)
    }
})

store = multer({storage:storage})

module.exports = store;

