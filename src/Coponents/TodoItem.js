import React, {Component} from "react";

class TodoItem extends Component {
   
    
   MarkisCompleted= () => {
        if(this.props.todoItem.isCompleted) 
            return { textDecoration: "line-through"};
        else 
            return {textDecoration: "none"};
    } 

  
    render() {
        const {id, task } = this.props.todoItem        
        return( 
            <div className="EachList" style={this.MarkisCompleted()}>
                <input type="checkbox" className="MarkCompletedCheckBox" name={`${this.props.todoItem.unique}`} onChange={ this.props.MarkCompletedList.bind(this, id)}/>
                  {task}
                <span id={`${id}`} className="closeIcon" onClick={this.props.DeleteList.bind(this, id)}><span className="remove icon"></span> </span>  
            </div>   
                 
                 
        )
    }
}


export default TodoItem;