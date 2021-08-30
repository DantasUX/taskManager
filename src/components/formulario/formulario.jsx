import React, { Component } from "react"

export class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo="";
        this.texto="";

    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo=evento.target.value;
        console.log(this.titulo)
    }
    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto=evento.target.value;
        console.log(this.texto)
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render(){
        return(
            <form className="formulario-cadastro"
            onSubmit={this._criarNota.bind(this)}>
                <input
                    type="text"
                    placeholder="titulo"
                    className="formulario-input"
                    /*CHAMAR UMA FUNCAO APARTI DA ACAO DESSA TAG IMPUT*/
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    placeholder="escreva sua nota"
                    rows={15}
                    className="formulario-textarea"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="fomulario-btn">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;