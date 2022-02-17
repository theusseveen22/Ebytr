import api from './api'

const createTasks = async (data) => {
    const { title, description } = data;
    const create = await api.post(`/tasks`, {
        title,
        description
    });
    return create;
  };

export default createTasks;