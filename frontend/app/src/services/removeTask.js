import api from './api'

const createTasks = async (_id) => {
    console.log('ID CHEGANDO...', _id)
    try {
      const returnDelete = await api.delete('/tasks/id', {
        data: {
          id: _id,
        }});
        return returnDelete;
    } catch (error) {
      console.log(error);
    }
    
  };

export default createTasks;