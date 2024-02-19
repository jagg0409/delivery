
import logo from './logo.svg';
import './App.css';


import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Mercado from "./mercado";
import Inicio from "./inicio";

class App extends Component {
    render(){
        return(
          <Routes>
              
<Route exact path={`/`} element={
  
  <Inicio></Inicio>
  
} />


<Route exact path={`/mercado`} element={
  <Mercado name="mercado"></Mercado>
} />

<Route exact path={`/electronics`} element={
  <Mercado name="electronics"></Mercado>
} />



</Routes>
        )
    }
}

export default App