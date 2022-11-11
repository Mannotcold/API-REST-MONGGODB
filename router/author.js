
const authorController = require("../controller/authorController");
const router = require("express").Router();
//const { addAuthor } = require("../controller/authorController");

 
//add author
router.post("/",authorController.addAuthor);

module.exports = router; 