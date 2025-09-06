const express = require('express');
const router = express.Router();
const { getHomepage, getTuan } = require('../controllers/homeController');

//khai bao route
router.get('/', getHomepage);

router.get('/tuan', getTuan);

module.exports = router;