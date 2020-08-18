import React from "react";
import './App.css';
import styled from "styled-components";

import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";

const Botao = styled.div`
     text-align:center;
     margin:5%;
     font-family:Lucida Sans;
` 

class App extends React.Component{
  state={
    etapa:1
  };

  

  rendenrizarEtapa = () => {
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
      default:
        return <Final/>
      }
    };

//faz com que o botão passe para proxima pagina
    irParaProximaEtapa =()=> {
      this.setState({etapa:this.state.etapa + 1 }); 
    }

    render(){
      return(
        <div>
          <Botao> 
          {this.rendenrizarEtapa()}
          <br/>
          {this.state.etapa !== 4 && (  //tira o botão da última pagina
          <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
          )}
          </Botao>
        </div>
      );
    }
  }
 

export default App;
