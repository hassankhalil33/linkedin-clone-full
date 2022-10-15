const {Router} = require('express');
const {getAllUsers} = require('../controllers/user.controller');
// const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/', getAllUsers);


module.exports = router;
