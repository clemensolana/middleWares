const express = require('express');

const router = express.Router();
const mainController = require('../controllers/mainControllers');
const loginMiddleware = require('../middlewares/userLogs');

router.get('/', loginMiddleware, mainController.home);
router.get('/prueba', mainController.prueba);
router.get('/pruebaDos', mainController.pruebaDos);

module.exports = router;
