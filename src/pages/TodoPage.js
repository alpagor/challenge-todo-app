import React, { Component } from "react";
import AddTodo from "../components/AddTodo";
import { TasksConsumer } from "./../lib/TasksProvider";

class TodoPage extends Component {
  state = { listOfTasks: [] };

  componentDidMount() {
    this.props.getAllTodos();
    console.log(this.props.getAllTodos());
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
              <button onClick={() => this.handleDelete(task)} type="submit">
                Remove
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TasksConsumer(TodoPage);
