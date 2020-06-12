import React, { Component } from "react";
import taskService from "../lib/task-service";
import AddTodo from "./../components/AddTodo"

class TodoPage extends Component {
    state = { listOfTasks: [] };

    componentDidMount() {
        taskService
        .getAllTodos()
        .then((allTasks) => {
            //we save the response into the state
            this.setState({ listOfTasks: allTasks });
            console.log("ToDo" , allTasks)
        })
        .catch((err) => console.log(err));
    }

    render() {
        return (
        <div>
            <h1>TODOs PAGE</h1>   
            <AddTodo getAllTodos={this.props.getAllTodos} />
            {this.state.listOfTasks.map((task) => {
            return (
                <div key={task._id} className="todos">
                <h3>{task.title}</h3>
                <p>{task.body}</p>
                </div>
            );
            })}
        </div>
        );
    }
    }

export default TodoPage;
