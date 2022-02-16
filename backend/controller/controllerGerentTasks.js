const { serviceCreateTasks, serviceAllTasks } = require('../service/serviceGerentTasks');

const controllerTasks = async (req, res) => {
    const { title, description } = req.body;
    const insertTasks = await serviceCreateTasks(title, description)
    return res.status(200).send(insertTasks);
}

const controllerAllTasks = async (_req, res) => {
    const allTasks = await serviceAllTasks();
    return res.status(200).send(allTasks);
}

module.exports = {
    controllerTasks,
    controllerAllTasks
}