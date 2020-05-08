const express = require('express');

const knexDb = require('../controller/knexdb');

const router = express.Router();


// router.post('/knex', knexDb.postUser);

router.get('/brands/:id', knexDb.getBrandLocations);
router.get('/brands', knexDb.getBrands);


module.exports = router;