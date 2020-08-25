import React from 'react';
import axios from 'axios';
// import ListaUsuarios from './components/ListaUsuarios';
import styled from 'styled-components';
// import Register from './componets/register'

 const Botao =styled.button`
  margin:auto;
  
  background-color:#993366 ;
  color: white;
  border: none;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.3em 3em;
  border: none;
 `
 const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;
 `
class App extends React.Component {
  state = {
    name:"" ,
    email:""
 };

 onChangeInputName = (event) =>{
  this.setState({name: event.target.value}) 
}
onChangeInputEmail = (event) =>{
this.setState({email: event.target.value}) 
}
creatUser = () =>{
  const body ={
      name:this.state.name,
      email:this.state.email
  }
}

render() {
  return (
    <Container>
    <div>
        <p>Nome:</p>
        <input value={this.state.name}
        onChange={this.onChangeInputName}
        
        />
        <p>E-mail</p>
        <input value={this.state.emal}
        onChange={this.onChangeInputEmail}
       
        />
      </div>
 
        <Botao onClick={this.creatUser}>Save</Botao>
        </Container>
        )
      }
      } 
        
       



export default App;




