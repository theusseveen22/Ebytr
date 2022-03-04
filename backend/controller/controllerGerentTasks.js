const { 
serviceCreateTasks, 
serviceAllTasks, 
serviceRemoveTask } = require('../service/serviceGerentTasks');

const controllerTasks = async (req, res) => {
    const { title } = req.body;
    const insertTasks = await serviceCreateTasks(title)
    return res.status(200).send(insertTasks);
}

const controllerAllTasks = async (_req, res) => {
    const allTasks = await serviceAllTasks();
    return res.status(200).send(allTasks);
}

const controllerRemoveTask = async (req, res) => {
    const { id } = req.body
    console.log(id);
    const remove = await serviceRemoveTask(id);
    console.log(remove);
    return res.status(200).send(remove);
}

module.exports = {
    controllerTasks,
    controllerAllTasks,
    controllerRemoveTask
}