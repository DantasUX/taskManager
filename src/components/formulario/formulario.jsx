import React, { Component } from "react"

export class FormularioCadastro extends Component{

    constructor(){
        super();
        this.titulo="";
    }

    handleMudancaTitulo(evento){
        this.titulo=evento.target.value;
        console.log(this.titulo)
    }

    render(){
        return(
            <form>
                <input
                    type="text"
                    placeholder="titulo"
                    className="formulario-input"
                    /*CHAMAR UMA FUNCAO APARTI DA ACAO DESSA TAG IMPUT*/
                    onChange={this.handleMudancaTitulo.bind(this)}
                />
                <textarea
                    placeholder="escreva sua nota"
                    rows={15}
                    className="formulario-textarea"
                />
                <button className="fomulario-btn">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;