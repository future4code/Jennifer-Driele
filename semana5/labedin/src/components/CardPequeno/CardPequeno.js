import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="small-card">
            <img src={props.imagem} />
            <div>
                <p>{props.text}</p>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}

export default CardPequeno;