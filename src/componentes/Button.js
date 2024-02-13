import { hover } from "@testing-library/user-event/dist/hover";
import { Component } from "react";

const styles = {
    button:{
        backgroundColor: '#542286a1',
        color:'#ffffff',
        border:'none',
        borderRadius:'2.667vw',
        boxShadow:'0vw 0.667vw 2.667vw #000000',
        cursor:'pointer',
        marginTop:'1vw',
        padding:'0.8vw',
        fontSize:'1vw',
    },
}

class Button extends Component{
    render(){
        return(
        <button style={styles.button} {...this.props}></button>
        )
    }
}

export default Button