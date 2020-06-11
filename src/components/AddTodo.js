import React, { Component } from "react";
import { TasksConsumer } from './../lib/TasksProvider';


class AddTodo extends Component {
  state = { title: "", body: "" };

  handleChange = (e) => {
    const { name, value } = e.target; //info from the input
    this.setState({ [name]: value }); //saving in the state, the input name and the value
  };

  handleSubmit = (e) => {
    e.preventDefault(); 
    const {title, body} = this.state
    this.props.createTodo(title, body);  
  };

  render(){
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


export default TasksConsumer (AddTodo);