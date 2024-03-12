
import logo from './logo.svg';
import './App.css';


import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Inside from "./sections-inside";
import Inicio from "./inicio";

class App extends Component {
    render(){
        return(
          <Routes>
              
<Route exact path={`/`} element={
  
  <Inicio></Inicio>
  
} />


<Route exact path={`/mercado`} element={
  <Inside name="mercado"></Inside>
} />

<Route exact path={`/electronics`} element={
  <Inside name="electronics"></Inside>
} />

<Route exact path={`/alcohol`} element={
  <Inside name="alcohol"></Inside>
} />

</Routes>
        )
    }
}

export default App