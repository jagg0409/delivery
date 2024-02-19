import { Component } from "react";
import Button from './Button.js'
import "./producto.css"

class Producto extends Component{
    render(){
        const {producto, agregarAlcarro} = this.props
        return(
            <div className="product">
                <img className="producto-img" src={producto.img} alt={producto.name} />
                <h3>{producto.name }  ${producto.price}</h3> 
                <Button onClick={ () => agregarAlcarro(producto) }>
                    Add To Basket
                </Button>
            </div>
        )
    }
}
export default Producto