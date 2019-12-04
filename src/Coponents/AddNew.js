import React ,{Component} from "react";
import ReactDOM from "react-dom";

class AddNew extends Component {

    constructor(props) {
        super(props);
       // this.value;
        this.handleAddNewClick = this.handleAddNewClick.bind(this);
    }

    handleAddNewClick () { 
        const input = document.getElementById("inputVal");
        const val = ReactDOM.findDOMNode(input).value;
        if(!val)
            alert('Empty !');        
        this.props.afterAddingNewValue(val);
    }

    render(){
        return(
            <div className="AddNewInputeContainer">
                 <div className="AddNewButton" onClick={this.handleAddNewClick} > 
                     + Add New 
                 </div>
                <div className="InputDiv">   
                     <input id="inputVal" className="AddNewItemInput" type="text" />
                </div>
            </div>
        )
    }
}

export default AddNew;