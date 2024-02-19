import { Component } from 'react';
import Barra from './componentes/barra.js'
import '../src/App.css'
import LoadingScreen from './componentes/loading/loading.js'
import { Link } from "react-router-dom"
import Section from './componentes/section.js';

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

  render() {
    
    
    const { isLoading } = this.state;

    if (isLoading) {
      // Render loading screen or component
      return (
        <div className="loading-screen">
          <LoadingScreen />
        </div>
      );
    }
    const {escarrovisible}=this.state
    console.log(this.state.carro);
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
         
      </div>
      )
    }
}
export default Inicio;
