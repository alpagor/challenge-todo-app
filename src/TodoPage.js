import React, { Component } from 'react'
import axios from 'axios'
import AddTodo from "./components/AddTodo"

class TodoPage extends Component {
    state = {
        listOfTasks: []
    }

    componentDidMount() {
        this.getAllTodos()
    }

    getAllTodos = () => {
        axios.get('http://localhost:4000/todos')
            .then((response) => {
                this.setState({listOfTasks: response.data})
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>TODOs PAGE</h1>
                <AddTodo getAllTodos={this.getAllTodos} />
                {
                    this.state.listOfTasks.map((task) => {
                    return (
                        <div key={task._id} className="todos">
                            <h3>{task.title}</h3>
                            <p>{task.body}</p>
                        </div>
                            )
                    })
                }
            </div>
            )
        }
    }



export default TodoPage