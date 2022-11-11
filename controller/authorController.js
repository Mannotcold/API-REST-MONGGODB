const {Author,Book} = require("../model/model");

const authorController = {
    //add ảthor
    addAuthor: async(req,res)=>{
        res.status(200).json(req.body);
    },
}
module.exports = authorController;