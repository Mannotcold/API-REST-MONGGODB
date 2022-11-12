const {Author,Book} = require("../model/model");

const authorController = {
    //add author
    addAuthor: async (req, res) =>{
        res.status(200).json(req.body).save();
    },
    
     //get all
     getAllAuthor: async(req,res)=>{
        //  try {
        //      const authors = await Author.find();
        //      res.status(200).json(authors);

        //  } catch (err) {
        //      res.status(500).json(err);
        //  }

        res.status(200).json(req.body).find();
     },
}
module.exports = authorController;