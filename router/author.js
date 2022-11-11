
const router = require("express").Router();
//const { addAuthor } = require("../controller/authorController");
const authorController = require("../controller/authorController");
 
//add author
router.post("/",authorController.addAuthor);
module.exports = router; 