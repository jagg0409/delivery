import { Component } from "react";
import Logo from './logo.js'
import Carro from './carro.js'
import './barra.css'
import { Link } from "react-router-dom";


class Barra extends Component{
    render(){
        const {carro, escarrovisible, mostrarcarro}  = this.props
        return(
            <nav className="barra">
                <Link to={'/'} >
                <Logo></Logo>
                </Link>
                <Link to={'/'} >
                <img src="/fasty.png" className="fasty"/>
                </Link>
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