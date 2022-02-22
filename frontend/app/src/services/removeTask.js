import api from './api'

const createTasks = async (_id) => {
    console.log('ID CHEGANDO...', _id)
    const { data } = await api.delete("/id", {
        _id
    });
    return data;
  };

export default createTasks;