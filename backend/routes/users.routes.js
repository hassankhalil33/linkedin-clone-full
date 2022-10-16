const {Router} = require('express');
const {
  getAllCompanies,
  getUser,
  getAllJobs,
  followCompany,
  unfollowCompany,
  retrieveNotifications,
  updateUser,
  applyJob,
  revokeApplyJob,
  applyJobEasy
} = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/', userMiddleware, getUser);
router.put('/', userMiddleware, updateUser);

router.get('/companies', userMiddleware, getAllCompanies);
router.get('/jobs', userMiddleware, getAllJobs);
router.post('/follow', userMiddleware, followCompany);
router.post('/unfollow', userMiddleware, unfollowCompany);
router.get('/notifications', userMiddleware, retrieveNotifications);

router.post('/apply', userMiddleware, applyJob);
router.delete('/apply', userMiddleware, revokeApplyJob);

router.post('/apply_easy', userMiddleware, applyJobEasy);

module.exports = router;
