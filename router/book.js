
 const bookController = require("../controller/bookController");
 const router = require("express").Router();
// //const { addAuthor } = require("../controller/authorController");

// //add A book
 router.post("/",bookController.addABook);

 module.exports = router; 