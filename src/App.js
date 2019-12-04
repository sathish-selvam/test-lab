import React, { Component } from "react";
import "./App.css";

import Header from "./Coponents/Header";
import Todo from "./Coponents/Todo";
import AddNew from "./Coponents/AddNew";
import Completed from "./Coponents/Completed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          task: "Woke up at Morning 5 AM",
          isCompleted: false
        },
        {
          id: 2,
          task: "5 mintues Prepare your day",
          isCompleted: false
        },
        {
          id: 3,
          task: "Learning at Good Time",
          isCompleted: false
        },
        {
          id: 4,
          task: "eat Breakfast",
          isCompleted: false
        },
        {
          id: 5,
          task: "Start Workout",
          isCompleted: false
        },
        {
          id: 6,
          task: "Get ready for Work",
          isCompleted: false
        }
      ]
    };
  }
  handleMarkComplete = id => {
    this.setState({
      data: this.state.data.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  };

  addNewHandler = val => {
    let previous = this.state.data.slice();
    let count = previous.length + 1;
    previous.push({
      id: count,
      task: val,
      isCompleted: false
    });
    this.setState({
      data: previous
    });
  };

  deleteHandler = id => {
    this.setState({
      data: this.state.data.filter(function(array, indx) {
        return indx + 1 !== id;
      })
    });
  };

  render() {
    return (
      <div className="AppContainer">
        <Header />
        <Todo
          todos={this.state.data}
          MarkComplete={this.handleMarkComplete}
          HandleDelete={this.deleteHandler}
        />
        <Completed todoCompletedList={this.state.data} />
        <AddNew afterAddingNewValue={this.addNewHandler} />
      </div>
    );
  }
}

export default App;
