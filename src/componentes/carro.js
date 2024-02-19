import { Component } from "react";
import Bublealert from './bublealert.js'
import Detallescarro from './detallescarro'

const styles ={
    carro:{
        backgroundColor:'#a47fca79',
        color:'#ffffff',
        border:'none',
        padding:'0.5vw',
        borderRadius:'2.667vw',
        cursor:'pointer',
        width:'6vw',
        fontSize:'1vw'
    },
    buble:{
        right:'4.5vw',
        top:'3vw',
        position:'absolute'
    },
    div:{
        position:'relative',
        display:'flex'
    },
    carroimg:{
        with:'2.5vw',
        height:'2.5vw'
    }
}

class Carro extends Component{
    render(){
        const{carro, escarrovisible, mostrarcarro} =this.props
        const cantidad = carro.reduce((acc, el)=>acc+el.cantidad, 0)
        console.log( "escarrovisible", escarrovisible)
        console.log( "mostrarcarro", mostrarcarro)
        return(
            <div style={styles.div}>
                <span style={styles.buble}>
                    {cantidad !== 0?
                    <Bublealert value={cantidad} />
                    :null}
                </span>
                <button onClick={mostrarcarro} style={styles.carro}>
                    <img src="/basket.png" style={styles.carroimg}/>
                </button>
                {escarrovisible?
                <Detallescarro carro={carro}/>
                :null}
            </div>
        )
    }
}

export default Carro