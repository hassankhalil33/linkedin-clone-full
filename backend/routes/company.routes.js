const {Router} = require('express');
const {} = require('../controllers/company.controller');
const companyMiddleware = require('../middlewares/company.middleware');
const router = Router();

router.get('/', companyMiddleware, getUser);


module.exports = router;
