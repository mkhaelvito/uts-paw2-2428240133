const express = require('express');
const router = express.Router();
const donasiControllers = require('../controllers/donasiControllers');
const cekApiKey = require('../middlewares/CekApiKey.js');

router.get('/', donasiControllers.getAll);
router.get('/:id', donasiControllers.getById);
router.post('/', cekApiKey, donasiControllers.create);
router.put('/:id', cekApiKey, donasiControllers.update);
router.delete('/:id', cekApiKey, donasiControllers.remove);

module.exports = router;