const {Router} = require('express');
const {createJob, getCompany, deleteJob, updateJob, getJob} = require('../controllers/company.controller');
const companyMiddleware = require('../middlewares/company.middleware');
const router = Router();

router.get('/', companyMiddleware, getCompany);

router.get('/job', companyMiddleware, getJob);
router.post('/job', companyMiddleware, createJob);
router.delete('/job', companyMiddleware, deleteJob);
router.put('/job', companyMiddleware, updateJob);

router.post('/applicants', companyMiddleware, confirmApplicant);
router.delete('/applicants', companyMiddleware, deleteApplicant);

module.exports = router;
