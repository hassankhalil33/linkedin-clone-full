const {Router} = require('express');
const {
  createJob,
  getCompany,
  deleteJob,
  updateJob,
  getJob,
  getAllJobs,
  confirmApplicant,
  deleteApplicant,
  updateCompany,
  getApplicants
  } = require('../controllers/company.controller');
const companyMiddleware = require('../middlewares/company.middleware');
const router = Router();

router.get('/', companyMiddleware, getCompany);
router.put('/', companyMiddleware, updateCompany);

router.get('/job', companyMiddleware, getAllJobs);
router.get('/job/:id', companyMiddleware, getJob);
router.post('/job', companyMiddleware, createJob);
router.delete('/job', companyMiddleware, deleteJob);
router.put('/job', companyMiddleware, updateJob);

//NEEDS TESTING
router.get('/applicants', companyMiddleware, getApplicants);
router.post('/applicants', companyMiddleware, confirmApplicant);
router.delete('/applicants', companyMiddleware, deleteApplicant);

module.exports = router;
