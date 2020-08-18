import React from 'react';

export default function PerguntaOpcoes(props){
    return (
        <div>
            <p>{props.pergunta}</p>
            <select>
                {props.opcoes.map((escolha) =>  
                 <option value ={escolha}>{escolha} </option> 
                )};
            </select>
        </div>
    );
}
