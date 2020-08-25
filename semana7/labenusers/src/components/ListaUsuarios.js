import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


class ListaUsuarios extends React.Component {
    state = {
     user:[],
   };
  
   pegarUsuarios = () => {
     const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      { 
        headers:{
          Authorization:"Jennifer-Silva-Jackson"
        }
     }
     )
    
  
     request
     .then((resposta) =>{
       this.setState({user:resposta.data})
     })
     .catch((erro) => {
       console.log(erro)
     })
   };
  
   componentDidMount() {
     this.pegarUsuarios()
   }
   onDeleteUser = () =>{
   
    }
  
   render(){
     return(
       <div>
         <h1>Usuários</h1>
         {this.state.user.map((item) =>{
           return <p key={item.id}>{item.name}</p>
           <button onClick={() => this.onDeleteUser(item.id)}>Deletar
           </button>
         })}
       </div>
     )
   };
  }
  
   export default ListaUsuarios;
  