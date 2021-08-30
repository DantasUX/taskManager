import React, {Component } from 'react';
import "./estilo.css"


class CardNota extends Component{
    render(){
        return(
            <section className="card-nota">
                <header>
                <h2>{this.props.titulo}</h2>
                </header>
                <p>{this.props.texto}</p>
            </section>

        )
    };
}

export default CardNota;