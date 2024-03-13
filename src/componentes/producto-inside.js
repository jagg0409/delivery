import { Component } from "react";
import Button from './Button.js'
import "./producto-inside.css"

class Producto extends Component{
    render(){
        const {producto, agregarAlcarro} = this.props
        return(
            <div className="product">
                <p className="product-label">{producto.label} </p>
                <h3 className="product-title">{producto.name }</h3> 
                <p className="product-description">{producto.description} </p>
                <img className="product-img" src={producto.img} alt={producto.name} />
                <footer className="product-footer">
                <p className="product-price">From  ${producto.price}</p>
                <Button onClick={ () => agregarAlcarro(producto) }>
                </Button>
                </footer>
            </div>
        )
    }
}
export default Producto