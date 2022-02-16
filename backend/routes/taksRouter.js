const router = require('express').Router();
const { controllerTasks, controllerAllTasks } = require('../controller/controllerGerentTasks')

router.post('/', controllerTasks);

router.get('/', controllerAllTasks);

module.exports = router;