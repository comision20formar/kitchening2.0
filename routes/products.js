const express = require('express');
const router = express.Router();

/* /products */
router.get('/', (req,res) => res.send('Lista de productos'))



module.exports = router