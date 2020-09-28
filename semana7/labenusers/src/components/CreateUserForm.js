import React from "react";
import axios from "axios";

import styled from 'styled-components';
import {baseUrl, axiosConfig } from "./constants/axiosConstants";

const Botao =styled.button`
    margin:20px auto;
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
    border-radius:10px;
 `
 const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0 auto;
    margin-top:50px;
    padding: 20px;
    box-shadow:5px 5px 5px 5px #993366;
    border-bottom-style:groove;
 
 `

class CreateUserForm extends React.Component {
  state = {
     nameValue:"" ,
     emailValue:"" 
 };
 
 onChangeInputName = (event) => {
   this.setState({nameValue: event.target.value})
  };
  
  onChangeInputEmail = (event) => {
   this.setState({emailValue: event.target.value})
  };
  
  createUser = () => {
    const body = {
      name:this.state.nameValue,
      email:this.state.emailValue
    };
    
   
    axios
     .post(baseUrl,body,axiosConfig)
     .then((response) => {
      alert(`A Conta ${this.state.nameValue},${this.state.emailValue}  foi criada com sucesso`);
       //console.log(response);
       this.setState({nameValue:"", emailValue:"" });
     })
     .catch((error) => {
       alert("Erro")
       console.log(error.message)
     });
  };
  
  render() {
    return (
      <Container>
        <p>Nome:</p>
        <input 
         value={this.state.nameValue}
         onChange={this.onChangeInputName}
        />
         <p>E-mail</p>
        <input 
         value={this.state.emailValue}
         onChange={this.onChangeInputEmail}
        />
        <Botao onClick={this.createUser}>Salvar</Botao>
     </Container>
    );
  }
}

export default CreateUserForm;


