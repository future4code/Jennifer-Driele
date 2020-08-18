import React from "react";
import PerguntaAberta from "../Components/PerguntaAberta";
import PerguntaOpcoes from "../Components/PerguntaOpcoes";

class Etapa1 extends React.Component{
 
    render(){
      return(
        <div>
          <h2>Etapa 1-Dados Gerais</h2>
          <PerguntaAberta pergunta={'1.Qual o seu Nome?'}/>
          <PerguntaAberta pergunta={'2.Qual a sua Idade?'}/>
          <PerguntaAberta pergunta={'3.Qual o seu E-mail?'}/>
          
          <PerguntaOpcoes pergunta={'4.Qual sua escolaridade?'}
          opcoes={[
              "Ensino Médio Incompleto",
              "Ensino Médio Completo",
              "Ensino Superior Incompleto",
              "Ensino Superior Completo"
          ]}
          />
        </div>
      )
    }
  }
  
  export default Etapa1;
  