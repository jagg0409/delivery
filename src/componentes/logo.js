import { Component } from "react";

const styles ={
    logo:{
        width:'5vw',
        height:'5vw',
    }
}
class Logo extends Component{
    render(){
        return(
            <div >
                <img style={styles.logo} src="/icon.png" /> 
                  
            </div>
        )
    }
}

export default Logo