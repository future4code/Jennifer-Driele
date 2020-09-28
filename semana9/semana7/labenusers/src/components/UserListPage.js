import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {baseUrl, axiosConfig } from "./constants/axiosConstants"

const DeleteButton = styled.span`
  color: #993366;
`;


class UserListPage extends React.Component {
    state = {
     user:[],
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
  //   .then((response) => {
  //     this.setState({user:response.data});
  //   });
  //   .catch((error) => {
  //     console.log(error.message);
  //   });
  // }

  deleteUser =(userId) => {
    axios
    .delete(`${baseUrl}/${userId}` , axiosConfig)
    .then((response) =>{
      this.getUsers();
    })
    .catch((error) =>{
      console.log(error.message);
    });
  }
  
  render() {
     return(
       <div>
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
       </div>
     )
   };
}

export default UserListPage;
  