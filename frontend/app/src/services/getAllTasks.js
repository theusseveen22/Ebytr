import api from './api'

const getAllTasks = async (id) => {
    const { data } = await api.get(`/tasks`);
    return data;
  };

export default getAllTasks;