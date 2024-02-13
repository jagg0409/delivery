import { Component } from "react";
import Producto from './producto.js'
const styles ={
    productos:{
        position:'relative',
        display:'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center',
       
}
}

class Productos extends Component{
    render(){
    const{productos, agregarAlcarro}= this.props
        return(
                <div  style={styles.productos}>
                    {productos.map(producto =>
                    <Producto
                    agregarAlcarro={agregarAlcarro}
                    key={producto.name}
                    producto={producto}
                    />
                    )}
                </div>
            )
    }
}

export default Productos