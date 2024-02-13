import { Component } from "react";

const styles ={
    detallescarro:{
        backgroundColor:'#ffffff',
        position:'absolute',
        marginTop:'30',
        boxShadow:'0.133vw 0.667vw 1.333vw rgb(0,0,0)',
        borderRadius:'0.667vw',
        top:'2.5vw',
        right:'2vw',
        zIndex:'2',
        fontSize:'1vw',
        height:'30vw',
        overflowY:'scroll'
    },
    ul:{
        margin:'0',
        padding:'0',
        fontSize:'1vw'
    },
    producto:{
        listStyleType:'none',
        display:'flex',
        gap:'4.667vw',
        alignItems:'center',
        padding:'1.333vw',
        borderBottom:'solid 0.133vw #aaa',
        fontSize:'1vw'
    },
    img:{
        height:'4vw', 
        width:'6vw'
    },
}

class Detallescarro extends Component {
    render(){
        const {carro}= this.props
        return(
            <div style={styles.detallescarro}>
            <ul style={styles.ul}>
                {carro.map(x => 
                <li style={styles.producto} key={x.name}>
                    <img src={x.img} alt={x.name} style={styles.img} />
                    {x.name} <br/> {'$' + (x.price*x.cantidad)} <span>{x.cantidad} </span>
                    </li>,
                    )}
            </ul>
            </div>
        )
    }
}
export default Detallescarro