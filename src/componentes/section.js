import { Component } from "react"
import './sections.css'



    class Section extends Component{
    render(){
        return(
            <div className="section">
                <img className="section-img" src={`/${this.props.name}.png`} alt={this.props.name} />
                <h3 className="section-h3">{this.props.name }</h3> 
            </div>
        )

    }
}
export default Section