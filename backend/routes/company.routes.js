const {Router} = require('express');
const {} = require('../controllers/company.controller');
const userMiddleware = require('../middlewares/company.middleware');
const router = Router();

router.get('/', userMiddleware, getUser);


module.exports = router;
