import { Component } from 'react';
import '../src/App.css'
import LoadingScreen from './componentes/loading/loading.js'
import { Link } from "react-router-dom"
import Section from './componentes/section.js';
import Barra from './componentes/barra.js';
import Producto from './componentes/producto-inside.js';
import allproducts from './allproducts.js';

const styles ={
  productos:{
    position:'relative',
    display:'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
}
}
class Inicio extends Component{
  state = {
    mercado: allproducts.mercado,
    electronics: allproducts.electronics,
    alcohol:allproducts.alcohol,
    carro:[],
    escarrovisible:false,
    isLoading: true,
  }
mostrarcarro=()=>{
  this.setState({escarrovisible: !this.state.escarrovisible})
}
  componentDidMount() {
    this.loadingTimeout = setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500);
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }
  agregarAlcarro = (producto) =>{
    const {carro}= this.state;
    if (carro.find(x => x.name === producto.name)){
      const newcarro = carro.map(x => x.name === producto.name?({
        ...x, cantidad: x.cantidad + 1  
      })
      :x)
      return this.setState({carro:newcarro})
    }
    else{
      return this.setState({
        carro: this.state.carro.concat({
          ...producto, cantidad: 1,
        })
      })
    }
  }
  render() {
    
    const {escarrovisible}=this.state
    const { isLoading } = this.state;

    if (isLoading) {
      // Render loading screen or component
      return (
        <div className="loading-screen">
          <LoadingScreen />
        </div>
      );
    }
    return(
      
      <div style={styles.productos}> 
        <Barra carro={this.state.carro} 
        escarrovisible={escarrovisible}
        mostrarcarro={this.mostrarcarro}
        /> 
        <Link to={'/mercado'} >
        <Section name ='mercado' />
          </Link>

          <Link to={'/electronics'}>
        <Section name ='electronics'/>
          </Link>
          
          <Link to={'/alcohol'}>
        <Section name ='alcohol'/>
          </Link>

          <Link to={'/clothes'}>
        <Section name ='clothes'/>
          </Link>

          <Link to={'/restaurants'}>
        <Section name ='restaurants'/>
          </Link>

          <Link to={'/walmart'}>
        <Section name ='walmart'/>
          </Link>
          <div  style={styles.productos}>
          {this.state.mercado.productos.map(producto =>
                    <Producto
                    agregarAlcarro={this.agregarAlcarro}
                    key={producto.name}
                    producto={producto}
                    />
                    )}
                    </div>
      </div>
      )
    }
}
export default Inicio;
