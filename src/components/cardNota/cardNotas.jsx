import React, {Component } from 'react';
import "./estilo.css"


class CardNota extends Component{
    render(){
        return(
            <section className="card-nota">
                <header>
                <h2>Titulo</h2>
                </header>
                <p>Nosta escrita</p>
            </section>

        )
    };
}

export default CardNota;