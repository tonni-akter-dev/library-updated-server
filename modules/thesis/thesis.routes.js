const express = require('express')
const router = express.Router();
const { addThesis, updateThesis } = require('./thesis.controller')

router.post("/addThesis",addThesis)
router.put("/updateThesis",updateThesis)