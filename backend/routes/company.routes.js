const {Router} = require('express');
const {createJob} = require('../controllers/company.controller');
const companyMiddleware = require('../middlewares/company.middleware');
const router = Router();

router.post('/job', companyMiddleware, createJob);


module.exports = router;
