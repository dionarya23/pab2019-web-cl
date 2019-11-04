const router = require('express').Router();
const ArtikelController = require('../controllers/artikel');

router.get('/', ArtikelController.home);
router.get('/artikel/:artikel_id', ArtikelController.getOneArtikel);
router.get('/artikel-baru', ArtikelController.showAdd)
router.post('/artikel-baru', ArtikelController.newArtikel)

module.exports = router