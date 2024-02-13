import { Component } from "react";
import Logo from './logo.js'
import Carro from './carro.js'
import './barra.css'



class Barra extends Component{
    render(){
        const {carro, escarrovisible, mostrarcarro}  = this.props
        return(
            <nav className="barra">
                <Logo></Logo>
                <img src="/fasty.png" className="fasty"/>
                <Carro 
                carro={carro}
                escarrovisible={escarrovisible}
                mostrarcarro={mostrarcarro}
                ></Carro>
            </nav>
        )
    }
}
export default Barra