const { 
createTasks, 
getAllTasks,
removeTask } = require('../model/gerenteTaks')

const serviceCreateTasks = async (title, description) => {
    const insetTasks = await createTasks(title, description)
    return insetTasks;
}

const serviceAllTasks = async () => {
    const allTasks = await getAllTasks();
    return allTasks;
}

const serviceRemoveTask = async (id) => {
    const remove = await removeTask(id)
    return remove;
}

module.exports = {
    serviceCreateTasks,
    serviceAllTasks,
    serviceRemoveTask,
}