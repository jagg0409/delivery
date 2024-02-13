import { Component } from 'react';
import Productos from './componentes/productos.js'
import Barra from './componentes/barra.js'
import '../src/App.css'
import LoadingScreen from './componentes/loading/loading.js'
import { Route } from 'react-router-dom';
import allproducts from './allproducts.js';
class Mercado extends Component{
  state = {
    mercado: allproducts.mercado,
    electronics: allproducts.electronics,
    
  carro:[],
  escarrovisible:false,
   
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
  
  clg
  
  mostrarcarro=()=>{
    this.setState({escarrovisible: !this.state[this.props.name].escarrovisible})
  }
  
  
  
  
  render() {
    
    const {escarrovisible}=this.state;
    console.log('lalu',this.state.carro);
    console.log('lalo',this.props.name)
    console.log('lala', this.props.name)
    return(
      
      <div className='app-contain'> 
        <Barra carro={this.state.carro} 
        escarrovisible={escarrovisible}
        mostrarcarro={this.mostrarcarro}
        /> 
        
        
        <Productos
          agregarAlcarro = {this.agregarAlcarro}
          productos={this.state[this.props.name].productos}
          />
          
        
      </div>
      )
    }
    
  }
  export default Mercado;
  