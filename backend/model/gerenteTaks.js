const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createTasks = async (title) => {
    const db = await connection()
    const insertTasks = await db.collection('tasks').insertOne({
        title
    })
    return insertTasks;
}

const getAllTasks = async () => {
    const db = await connection();
    const allTasks = await db.collection('tasks').find().toArray();
    return allTasks;
}

const removeTask = async (id) => {
    const db = await connection();
    console.log('ID', id);
    const remove = await db.collection('tasks')
    .deleteOne({"_id": ObjectId(id)});
    return remove;
}

module.exports = {
    createTasks,
    getAllTasks,
    removeTask
}
