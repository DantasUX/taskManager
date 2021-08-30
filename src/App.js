import React, { Component } from 'react'
import ListaDeNotas from "./components/listadenotas/"
import FormularioCadastro from "./components/formulario/"
class App extends Component{

  constructor(){
    super();
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota ={titulo, texto};
    const novoArrayNotas =[...this.state.notas,novaNota]
    const novoEstado ={
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render(){
    return (
      <>
        <h1>fabio dantas</h1>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </>
    );
    }
}

export default App;
