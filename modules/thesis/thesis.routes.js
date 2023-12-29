const express = require('express')
const router = express.Router();
const { addThesis, updateThesis,getThesisById,deleteAThesis,getAllThesis } = require('./thesis.controller')

router.post("/addThesis", addThesis)
router.post("/getThesisbyId/:id", getThesisById)
router.get("/getAllThesis", getAllThesis)
router.put("/updateThesis", updateThesis)
router.put("/deleteThesis", deleteAThesis)
module.exports = router;