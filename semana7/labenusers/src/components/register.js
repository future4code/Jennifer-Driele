import React from "react";
import styled from "styled-components";
import axios from 'axios';
;


class Register extends React.Component{
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

    const request = axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "Jennifer-Silva-Jackson"
          }
        }
      );
  
      request
        .then((resposta) => {
          alert(`A playlist ${this.state.name.email} foi criada com sucesso`);
          this.getUser();
          this.setState({ name: "" , email:""
        });
        })
        .catch((erro) => {
          console.log("Erro");
        });
    };

}

render() {
    return(
      <div>
          <p>Nome:</p>
          <input value={this.state.name}
          onChange={onchangeInputName}/>
          <p>E-mail</p>
          <input value={this.state.emal}
          onChange={onchangeInputEmail}/>
          </div>  
          <button onClick={this.createUser}>Save</button>
    );
}
}

export default Register