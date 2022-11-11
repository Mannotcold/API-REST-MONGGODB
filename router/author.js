
const authorController = require("../controller/authorController");
const router = require("express").Router();
//const { addAuthor } = require("../controller/authorController");

 
//add author
router.post("/",authorController.addAuthor);

//Get all author
router.get("/", authorController.getAllAuthor)

module.exports = router; 