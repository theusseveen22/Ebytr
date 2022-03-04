const router = require('express').Router();
const {
controllerTasks, 
controllerAllTasks,
controllerRemoveTask } = require('../controller/controllerGerentTasks')

router.post('/', controllerTasks);

router.get('/', controllerAllTasks);

router.delete('/id', controllerRemoveTask);

module.exports = router;