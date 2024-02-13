import { Component } from "react";
import Button from './Button.js'

const styles = {
    producto:{
        border: 'solid, 0.133vw #eee',
        boxShadow: '0vw 0.267vw 1.7vw #0A283E',
        padding:'1.5vw',
        margin:'1.3vw',
        width: '15vw',
        height: '20vw',
        borderRadius: '1.333vw',
        textTransform:'capitalize',
        fontSize:'1.2vw',
        background:'#a47fca90',
        position:'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'8vw'
    },
    img:{
        width:'90%',
        height:'9vw',
        background:'#00000069',
        borderRadius:'1vw',
        padding:'1vw'
    }
}

class Producto extends Component{
    render(){
        const {producto, agregarAlcarro} = this.props
        return(
            <div style={styles.producto}>
                <img style={styles.img} src={producto.img} alt={producto.name} />
                <h3>{producto.name }  ${producto.price}</h3> 
                <Button onClick={ () => agregarAlcarro(producto) }>
                    Add To Basket
                </Button>
            </div>
        )
    }
}
export default Producto