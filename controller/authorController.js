const {Author,Book} = require("../model/model");

const authorController = {
    //add author
    addAuthor: async (req, res) =>{
       res.status(200).json(req.body);
    },
    
     //get all
     getAllAuthor: async(req,res)=>{
        // try{
        //     const authors = await Author.find();
        //     res.status(200).json(authors);

        // }catch(err){
        //     res.status(500).json(err);
        // }
        //
        const authors = await Author.find();
        res.status(200).json(authors);
     },
}
module.exports = authorController;