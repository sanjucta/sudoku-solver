import React,{Component} from 'react';
import { render } from '@testing-library/react';
import './editable-square.styles.css';

class EditableSquare extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            editing:false,
            inputElem : null // The actual DOM element for the input field 
        }

    }

    componentDidUpdate()
    {
        //Set the focus inside the input element when the user clicks on the div
        if(this.state.inputElem)
        {
            this.state.inputElem.focus();
        }
        
    }

  
    render()
    {
        return(
            <div className="grid-square">
                {
                   this.state.editing ? 
                   <div>
                       <input type="number" min="1" max="9" 
                         ref={(input)=>{this.state.inputElem=input}}  
                         onChange={(event)=>{this.props.updateValue(event.target.value)}} 
                         onBlur={()=>{this.setState({editing:false})}}
                         >
                       </input>
                   </div>
                    :
                    <div  onClick={()=>{this.setState({editing:true});}} >{this.props.value}</div>
                }        
            </div>
        )
    }
    
}

export default EditableSquare;
