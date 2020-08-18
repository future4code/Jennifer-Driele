import React from "react";
import PerguntaAberta from "../Components/PerguntaAberta";



class Etapa2 extends React.Component{
    render(){
        return(
            <div>
                <h2>Etapa 2- Informações Do Ensino Superior</h2>
                <PerguntaAberta pergunta={'5.Qual o curso?'}/>
                <PerguntaAberta pergunta={'6.Qual a unidade de ensino?'}/>
            </div>
        );
    }
}
export default Etapa2