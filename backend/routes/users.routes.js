const {Router} = require('express');
const {getAllUsers} = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/', userMiddleware, getAllUsers);


module.exports = router;
