const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');



router.get('/', indexController.getMessages);
router.post('/', indexController.postMessage);
module.exports = router;
