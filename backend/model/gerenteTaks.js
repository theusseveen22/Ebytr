const connection = require('./connection');

const createTasks = async (title, description) => {
    const db = await connection()
    const insertTasks = await db.collection('tasks').insertOne({
        title,
        description,
        status: 'open'
    })
    return insertTasks;
}

const getAllTasks = async () => {
    const db = await connection();
    const allTasks = await db.collection('tasks').find().toArray();
    console.log(allTasks);
    return allTasks;
}

module.exports = {
    createTasks,
    getAllTasks
}
