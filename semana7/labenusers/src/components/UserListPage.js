import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {baseUrl, axiosConfig } from "./constants/axiosConstants"
import CreateUserForm from './CreateUserForm';

const DeleteButton = styled.span`
  color: #993366;
`;


class UserListPage extends React.Component {
    state = {
     user:[],
     currentPage:"usersList",
     userId:"",
     name:""
   };

   componentDidMount = () => {
    this.getUsers();
  };
 // SINTAXE DE ASYNC/AWAIT (faz a mesma coisa que o Then)
  getUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);

      this.setState({ user: response.data });
    } catch (error) {
      console.log(error.message);
    }
  }

  //Sintaxe de Promises com Then
  // getUsers = () =>{ 
  //   axios.get(baseUrl,axiosConfig)
  //   .then(response => {
  //     this.setState({user:response.data});
  //   });
  //   .catch((error) => {
  //     console.log(error.message);
  //   });
  // }



  deleteUser =(userId) => {
    if ("Tem certeza que deseja apagar o usuário?") {
    axios
    .delete(`${baseUrl}/${userId}` , axiosConfig)
    .then(() =>{
      alert("Usuário apagado com sucesso!");
      this.getUsers();
    })
    .catch(error => {
      alert("ERRO AO APAGAR USUARIO");
      //console.log(error.message);
    });
  }
}
  changePage =(event) => {
    if(this.state.currentPage === "usersList"){
      this.setState({ currentPage:"userDetail".event. userId })
    }else{
      this.setState({currentPage:"usersList",userId: ""})
    }
  }

  handleNameChange = (event) => {
    const newNameValue = event.target.value;
    this.setState({name:newNameValue})
  }

  handleSearchUser = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${
          this.state.name
        }&email=`,
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        //console.log(error);
      });
  };
  
  render() {
     return(
       <div>
            {this.state.currentPage === "usersList" ? (
          <div> 
            {this.state.usersList.length === 0 && <div>Carregando...</div>}
         <h1>Usuários</h1>
         {this.state.user.map((item) => {
           return( 
           <p key={item.id}>{item.name}
             <DeleteButton onClick={() => this.deleteUser(item.id)}>
                {" "}
                X
              </DeleteButton>
           </p>
           );
         })}
         
         <h4>Procurar Usuário</h4>
         <input
         placeholder="Nome exato para busca"
         type="text"
         value={this.state.name}
         onChange={this.handleNameChange}/>
         <button onClick={this.handleSearchUser}>Salvar Edição</button>
      </div>  
     ):(  
      <CreateUserForm userId={this.state.userId} changePage={this.changePage} />
     )}
     </div>
     )
     }
}

export default UserListPage;
  