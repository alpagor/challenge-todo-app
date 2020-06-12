import React, { Component } from "react";
import taskService from "../lib/task-service";

class AddTodo extends Component {
  state = { title: "", body: "", listOfTasks: [] };

  handleChange = (e) => {
    const { name, value } = e.target; //info from the input
    this.setState({ [name]: value }); //saving in the state, the input name and the value
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    const newTask = { title, body };

    taskService.createTodo(newTask).then(() => {
      const taskList = [...this.state.listOfTasks];
      // taskList.push(newTask)
      this.setState({ title: "", body: "" }); //clear the form after info has been sent
      this.getAllTodos();
      // Triggers the method to get all projects
      // which refreshes the ProjectsPage
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>ADD NEW TASK</h2>
        <label>Title</label>
        {/* in order to make the form working in React we 
        connect the value with the state */}
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <label>Description</label>
        <input
          type="text"
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />

        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default AddTodo;
