const express = require('express')
const router = express.Router();
const { addThesis, updateThesis,getThesisById,deleteAThesis,getAllThesis } = require('./thesis.controller')

router.get("/getAllThesis", getAllThesis)
router.post("/addThesis", addThesis)
router.get("/getThesisbyId/:id", getThesisById)
router.put("/updateThesis", updateThesis)
router.delete("/deleteThesis/:id", deleteAThesis)
module.exports = router;