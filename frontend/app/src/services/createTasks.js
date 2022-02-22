import api from './api'

const createTasks = async (dataTasks) => {
    const { title } = dataTasks;
    const { data } = await api.post(`/tasks`, {
        title
    });
    return data;
  };

export default createTasks;