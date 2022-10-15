const {Router} = require('express');
const {
  getAllCompanies,
  getUser,
  getAllJobs,
  followCompany,
  unfollowCompany,
  retrieveNotifications} = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/companies', userMiddleware, getAllCompanies);
router.get('/', userMiddleware, getUser);
router.get('/jobs', userMiddleware, getAllJobs);
router.post('/follow', userMiddleware, followCompany);
router.post('/unfollow', userMiddleware, unfollowCompany);
router.post('/notifications', userMiddleware, retrieveNotifications);


module.exports = router;
