import { hover } from "@testing-library/user-event/dist/hover";
import { Component } from "react";
import './button.css'
class Button extends Component{
    render(){
        return(
        <button className="button-buy" {...this.props}>Add</button>
        )
    }
}

export default Button