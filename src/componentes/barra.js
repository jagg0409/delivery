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
                <img src="/fasty.png" className="fasty"/>
                </Link>
                <section className="sections">
                <h3>Shop</h3>
                <h3>About</h3>
                <h3>Contact</h3>
                <h3>Careers</h3>
                </section>
                <img src="/loupe.png" alt="search" className="search"/>
                <img src="/user.png" alt="user" className="user"/>
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