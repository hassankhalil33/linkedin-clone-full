const {Router} = require('express');
const {createJob, getCompany} = require('../controllers/company.controller');
const companyMiddleware = require('../middlewares/company.middleware');
const router = Router();

router.post('/job', companyMiddleware, createJob);
router.get('/', companyMiddleware, getCompany);


module.exports = router;
