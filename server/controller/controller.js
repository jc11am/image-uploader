

exports.home = (function(req, res){
    res.render("index")
})

exports.upload = (function(req,res,next){
    const files = req.files;

    if(!files){
        const err = new Error("Please choose files");
        error.httpStatusCode = 400;
        return next(err)
    }

    res.json(files)
})