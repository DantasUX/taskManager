import React, { Component } from 'react'
import ListaDeNotas from "./components/listadenotas/"
import FormularioCadastro from "./components/formulario/"
class App extends Component{
  render(){
    return (
      <>
        <h1>fabio dantas</h1>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </>
    );
    }
}

export default App;
