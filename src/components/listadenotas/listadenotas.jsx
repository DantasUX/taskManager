import React, { Component } from 'react'
import CardNota from '../cardNota'
import "./estilo.css"

export class ListaDeNotas extends Component{
    render(){
        return(
            <ul>
                {Array.of("Trabalho","Cuidar da Casa", "pagar conta",1,1,1,1,1,1).map(
                    (categoria, index) =>{
                        return(
                            <li key={index}>
                                <CardNota />
                            </li>
                        )
                    }
                )}
            </ul>
        );
    }   
}

export default ListaDeNotas;
