const {Router} = require('express');
const {getAllUsers, getUser} = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/all', userMiddleware, getAllUsers);
router.get('/user', userMiddleware, getUser);


module.exports = router;
