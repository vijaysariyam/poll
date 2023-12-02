const express = require('express');
const controller = require('../controllers/poll_survey.controller.js');
const router = express.Router();
router.get('/poll_survey/getall', controller.getAll);
router.get('/poll_survey/:id', controller.getById);
router.post('/poll_survey/', controller.create);
router.put('/poll_survey/:id', controller.updateById);
router.delete('/poll_survey/:id', controller.deletedById);

//join queries
router.get('/getallpollsurveywithjoin', controller.getAllWithJoin);

router.post('/getopinionpolldashboard/', controller.getOpininoPollDashboardByJoinWhere);
router.post('/getopinionreports/', controller.getOpinionReports);

module.exports = router;
