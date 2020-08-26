import React from 'react';
import axios from 'axios';
import ListaUsuario from './components/ListaUsuarios';
import styled from 'styled-components';


 const Botao =styled.button`
  margin:auto;
  margin-top:20px;
  background-color:#993366 ;
  color: white;
  border: none; 
  position:relative ;
  color: white;
  padding: 0.3em 3em;
  border: none;
  justify-content:center;
  display: flex;
  flex-direction: column;
  
 `
 const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  margin: 0 auto;
  margin-top:50px;
  padding: 20px;
 
 `

class App extends React.Component {
  state = {
    
    name:"" ,
    email:"" 
 };

 criarUsuario = () =>{
  const body = {
      name:this.state.name,
      email:this.state.email
  };


  const request = axios.post(
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
     body,
    {
      headers:{
        Authorization: "Jennifer-Silva-Jackson"
      }
    }
  );
  request
  .then((resposta) => {
    alert(`A Conta ${this.state.name},${this.state.email}  foi criada com sucesso`);
    this.setState({
      name:"",
      email:"",
    });
  })
  .catch((erro) => {
    alert("Erro");
  });
};

 onChangeInputName = (event) =>{
  this.setState({name: event.target.value}) 
}
 onChangeInputEmail = (event) =>{
this.setState({email: event.target.value})
}
proximaPagina = () => {
  this.props.user();
};



render() {
  return (
    <Container>
    
        <p>Nome:</p>
        <input value={this.state.name}
        onChange={this.onChangeInputName}
        
        />
        <p>E-mail</p>
        <input value={this.state.emal}
        onChange={this.onChangeInputEmail}
       
        />
      
      <Botao onClick={this.criarUsuario}>Save</Botao>
      <div>
      <Botao onClick={this.proximaPagina}>
        Página de Usuarios
     </Botao>
  
      </div>
      
      </Container>
      
       
        )
  }
    
    
     
}
export default App;




