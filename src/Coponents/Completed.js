import React from "react";


class Completed extends React.Component {

    handleCount = () => {
        const count = this.props.todoCompletedList;
        let itemCount = 0;
        count.forEach(element => {
            if(element.isCompleted)
                itemCount++;
        });
        return itemCount;
    }   
 
    render() {
        return(
            <div className="TaskCompleted">
                <span>Completed ({this.handleCount()})</span>
                {
                    this.props.todoCompletedList.map( (todo) => {
                        return  todo.isCompleted ? <CompletedTodo key={todo.id} complete={todo} /> : ''
                    })
                }
            </div>
        )
    }
}


class CompletedTodo extends React.Component {
    

    render() {
        
        return(
            <div className="TaskCompletedList">
                <div className="check icon"></div>
                <p style={{paddingLeft : "30px"}} >{this.props.complete.task} </p>
            </div> 
        )
    }
}


export default Completed;