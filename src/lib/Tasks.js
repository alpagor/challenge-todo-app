import React from "react";

//React context that provide us the 2 components consumer & provider
//we can use Provider to store data for the entire app. The consumer
//is a component that can connect to it. In our case we'll create here the
//functions needed and where we'll dispatch the request to the backend
const { Consumer, Provider } = React.createContext();

//HOC

class TasksProvider extends React.Component {
  state = {
    listOfTasks: [],
  };


    getAllTodos = () => {
        axios
        .get("localhost:4000/api/v1/todos")
        .then((response) => {
            this.setState({ listOfTasks: response.data });
        })
        .catch((err) => console.log(err));
    };

    createTodo = () => {
        axios
            .post("localhost:4000/api/")
    };

    deleteTodo = () => {};

    updateTodo = () => {};



  render() {
    return (
      //inside the  tag Provider we put anything we want to provide
      //to the entire  aplication  (what we have in the state)
      <Provider value={{ listOfTasks: this.state.listOfTasks }}>
        {/* b4 loading the component we need to wrap it around
             the entire aplication {App.js} */}
        {this.props.children}
      </Provider>
    );
  }
}

export { TasksProvider };
