import axios from 'axios';

//In this section of code we only import the axios library and create an instance 
//that will allow us to use certain default values that will take all our requests, 
//in our case it is the following END point:
const baseUrl = process.env.REACT_APP_API_URL;

class Tasks  {
    constructor(){
        this.tasks = axios.create({
            baseURL: `${baseUrl}/todos`,
        });
    }

    getAllTodos() {
        return this.tasks
        .get()
        .then(({ data }) => data);
    }

    getTodo(todoId) {
        return this.tasks
        .get(`/${todoId}`)
        .then(({ data }) => data);
    }

    createTodo(newTask) {
        return this.tasks
        .post(newTask)
        .then(({ data }) => data);
    }

    updateTodo(todoId, todoUdated) {
        return this.tasks
        .put(`/${todoId}`, todoUdated)
        .then(({ data }) => data);
    }

    deleteTodo(todoId) {
        return this.tasks
        .get(`/${todoId}`)
        .then(({ data }) => data);
    }

}


const taskService = new Tasks();
export default taskService;