// import React from "react";
// import axios from "axios";


// //React context that provide us the 2 components consumer & provider
// //we can use Provider to store data for the entire app. The consumer
// //is a component that can connect to it. In our case we'll create here the
// //functions needed and from where we'll dispatch the requests to the backend
// const { Consumer, Provider } = React.createContext();

// //HOC
// function TasksConsumer(WrappedComponent) {
//   //we return an anonymous component
//   return function (props) {
//     //here we say what we want to do with the wrap component
//     //in our case make any component into a consumer
//     return (
//       <Consumer>
//         {/* start reading values coming from the Provider */}
//         {(valueFromProvider) => {
//           return (
//             <WrappedComponent
//               {...props} //passing the own components props
//               //injecting the values from the provider
//               listOfTasks={valueFromProvider.listOfTasks}
//               title={valueFromProvider.title}
//               body={valueFromProvider.body}
//               getAllTodos={valueFromProvider.getAllTodos}
//               createTodo={valueFromProvider.getAllTodos}
//               deleteTodo={valueFromProvider.deleteTodo}
//               updateTodo={valueFromProvider.updateTodo}
//             />
//           );
//         }}
//       </Consumer>
//     );
//   };
// }

// class TasksProvider extends React.Component {
//   //we'll in the sate the  properties we want to send or get from the server
//   state = {
//     listOfTasks: [],
//     title: "",
//     body: "",
//     todo: {},
//   };

//   // getAllTodos = () => {
//   //   taskService.get
//   //     .get("http://localhost:4000/api/v1/todos")
//   //     .then((response) => {
//   //       //we save the response into the state
//   //       this.setState({ listOfTasks: response.data });
//   //     })
//   //     .catch((err) => console.log(err));
//   // };

//   createTodo = (title, body) => {
//     axios
//       .post("http://localhost:4000/api/v1/todos", {
//         title: this.state.title,
//         body: this.state.body,
//       })
//       .then(() => {
//         this.setState({ title: "", body: "" }); //clear the form after info has been sent
//         this.getAllTodos();
//         // Triggers the method to get all projects
//         // which refreshes the ProjectsPage
//       })
//       .catch((err) => console.log(err));
//   };

//   deleteTodo = (todoId) => {
//     axios.delete(`http://localhost:4000/api/v1/todos/${todoId}`).then(() => {
//       const tasksList = [...this.state.listOfTasks].filter((task) => {
//         return task._id !== todoId;
//       });
//       this.setState({ listOfTasks: tasksList });
//     });
//   };

//   updateTodo = (title, body, todoId) => {};

//   getTodo = (todoId) => {
//     axios
//       .get(`http://localhost:4000/api/v1/todos/${todoId}`)
//       .then((response) => {
//         const task = response.data;
//         this.setState({ todo: task });
//       })
//       .catch((err) => console.log(err));
//   };

//   render() {
//     const { listOfTasks, title, body } = this.setState;
//     const { getAllTodos, createTodo, deleteTodo, updateTodo, getTodo } = this; //"this" because they're coming from the current component
//     return (
//       //inside the  tag Provider we put anything we want to provide
//       //to the entire  aplication  (what we have in the state)
//       <Provider
//         value={{
//           listOfTasks,
//           title,
//           body,
//           getAllTodos,
//           createTodo,
//           deleteTodo,
//           updateTodo,
//           getTodo,
//         }}
//       >
//         {/* b4 loading the component we need to wrap it around
//              the entire aplication {App.js} */}
//         {this.props.children}
//       </Provider>
//     );
//   }
// }

// export { TasksConsumer, TasksProvider };
