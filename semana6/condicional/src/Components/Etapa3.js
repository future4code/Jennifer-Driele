import React from "react";
import PerguntaAberta from "../Components/PerguntaAberta";
import PerguntaOpcoes from "../Components/PerguntaOpcoes";

class Etapa3 extends React.Component {
    render(){
        return(
            <div>
              <h2>Etapa 3- Informações Gerais De Ensino</h2>
              <PerguntaAberta pergunta={'5.Por que você não terminou um curso de graduação?'}/>
              <PerguntaOpcoes pergunta={'6.Você fez algum curso complementar?'}
        opcoes={[
            "Nenhum",
            "Curso Técnico" ,
            "Curso de Inglês" 
            
        ]}
        />
            </div>
        )
    }
}
export default Etapa3