const {Author,Book} = require("../model/model");

const authorController = {
    //add author
    addAuthor: async (req, res) =>{
        try {
            const newauthor = new Author(req.body);
            const saveAuthor = await newauthor.save(); 
            res.status(200).json(saveAuthor);
        } catch (err) {
            res.status(500).json(err);
        }
        //res.status(200).json(req.body);
    },
     //get all
    getAllAuthor: async(req,res)=>{
         try {
             const authors = await Author.find();
             res.status(200).json(authors);
         } catch (err) {
             res.status(500).json(err);
         }
     
    },

    //get an author
    getAnAuthor: async(req,res)=>{
        try {
            const authors = await Author.findById(req.params.id);
            res.status(200).json(authors);
        } catch (err) {
            res.status(500).json(err);
        }
    
   },

   //Update author
   updateAuthor: async(req,res)=>{
    try {
        const authors = await Author.findById(req.params.id);
        await authors.updateOne({$set: req.body})
        res.status(200).json("Updated successfully!");
    } catch (err) {
        res.status(500).json(err);
    }

},
}



module.exports = authorController;