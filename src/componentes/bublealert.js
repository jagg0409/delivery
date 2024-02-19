import { Component } from "react";

const styles={
    bublealert:{
        backgroundColor:'#E9725A',
        borderRadius:'2.667vw',
        color:'#ffffff',
        padding:'0.267vw 1.333vw',
        fontWeight:'2.667vw',
        width:'6.667vw'
    }
}

class Bublealert extends Component{
    getNumber(n){
        if(!n){ return ''}
        return n>9 ? '9+' : n
    }
    
    render(){
        const{ value } = this.props
        return(
            <span style={styles.bublealert}>
                {this.getNumber(value)}
            </span>
        )
    }
}
export default Bublealert