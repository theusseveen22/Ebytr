const { createTasks, getAllTasks } = require('../model/gerenteTaks')

const serviceCreateTasks = async (title, description) => {
    const insetTasks = await createTasks(title, description)
    return insetTasks;
}

const serviceAllTasks = async () => {
    const allTasks = await getAllTasks();
    return allTasks;
}

module.exports = {
    serviceCreateTasks,
    serviceAllTasks
}