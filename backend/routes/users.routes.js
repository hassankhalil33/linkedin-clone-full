const {Router} = require('express');
const {getAllCompanies, getUser} = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/companies', userMiddleware, getAllCompanies);
router.get('/', userMiddleware, getUser);
router.get('/jobs', userMiddleware, getUser);


module.exports = router;
