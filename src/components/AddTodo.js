import React, { Component } from "react";
import axios from "axios";

export default class AddProject extends Component {
  state = {
    title: "",
    body: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/todos", {
        title: this.state.title,
        body: this.state.body,
      })
      .then(() => {
        this.setState({ title: "", body: "" });
        this.props.getAllTodos();
        // Triggers the method to get all projects
        // which refreshes the ProjectsPage
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>ADD NEW TASK</h2>
        <label>Title</label>
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
