const {Router} = require('express');
const {createJob, getCompany, deleteJob, updateJob} = require('../controllers/company.controller');
const companyMiddleware = require('../middlewares/company.middleware');
const router = Router();

router.post('/job', companyMiddleware, createJob);
router.delete('/job', companyMiddleware, deleteJob);
router.put('/job', companyMiddleware, updateJob);
router.get('/', companyMiddleware, getCompany);


module.exports = router;
