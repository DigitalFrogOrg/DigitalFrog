const express = require('express');
const {submitForm} = require('../controllers/formController')
const upload = require('../config/multerUpload')

const router = express.Router()


//Post route to handle form submission
router.post('/submit',upload.single("file"),submitForm)

module.exports = router