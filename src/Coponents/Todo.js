import React, {Component} from "react";
import TodoItem from "./TodoItem";

class Todo extends Component {
    render() {
         return (
             <div className="TodoListContainer"> {
                    this.props.todos.map((todo) => (
                        todo.isCompleted ? "": <TodoItem key={todo.id}  todoItem={todo} MarkCompletedList={this.props.MarkComplete} DeleteList={this.props.HandleDelete} />
                    ))
                }
             </div>
        )
    }
}

export default Todo;