import { Component } from 'react';
import Productos from './componentes/productos.js'
import Barra from './componentes/barra.js'
import '../src/App.css'
import LoadingScreen from './componentes/loading/loading.js'
import { Route } from 'react-router-dom';

class Electronics extends Component{
  
state = {
  productos:[
    {name:'pescado', price: 1500, img:'/productos/tomate.png'},
    {name:'cebolla', price: 2000, img:'/productos/cebolla.png'},
    {name:'lechuga', price: 500, img:'/productos/lechuga.png'},
    {name: 'aguacate', price: 2500, img:'/productos/aguacate.png'},
    {name: 'pepino', price: 900, img:'/productos/pepino.png'},
    {name: 'papa', price: 700, img:'/productos/papa.png'},
    {name: 'zanahoria', price: 300, img:'/productos/zanahoria.png'},
    {name: 'brocoli', price: 3000, img:'/productos/brocoli.png'},
    {name: 'maiz', price: 2700, img:'/productos/maiz.png'},
    
  ],
  carro:[],
  escarrovisible:false,
}
agregarAlcarro = (producto) =>{
  const {carro}= this.state
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

mostrarcarro=()=>{
  this.setState({escarrovisible: !this.state.escarrovisible})
}


  

  render() {
    
    const {escarrovisible}=this.state
    console.log(this.state.carro);
    return(
      
      <div className='app-contain'> 
        <Barra carro={this.state.carro} 
        escarrovisible={escarrovisible}
        mostrarcarro={this.mostrarcarro}
        /> 
        
        
        <Productos
          agregarAlcarro = {this.agregarAlcarro}
          productos={this.state.productos}
          />
          
        
      </div>
      )
    }
}
export default Electronics;