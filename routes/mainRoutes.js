const express = require('express');

const router = express.Router();
const mainController = require('../controllers/mainControllers');
const regMiddleware = require('../middlewares/userLogs');
const loginMiddleware = require('../middlewares/loginLogs');

router.get('/', regMiddleware, mainController.home);
router.get('/prueba', regMiddleware, mainController.prueba);
router.get('/pruebaDos', regMiddleware, mainController.pruebaDos);

router.get('/admin', loginMiddleware, mainController.admin);

module.exports = router;
