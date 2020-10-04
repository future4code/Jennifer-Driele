import axios from 'axios';
import {Base_Url}  from '../constants/urls';
import {goToFeedPage} from '../routes/Coordinator';

export const login = (body, history) => {
  axios.post(`${Base_Url}/labEddit/login`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      goToFeedPage(history)
      //console.log(response)
     
    })
    .catch((error) => {
      //console.log(error)
      alert("Falha no Login, tente novamente")
    })
}

export const signUp = (body, history) => {
  axios.post(`${Base_Url}/labEddit/signup`, body)
    .then((response)=>{
      localStorage.setItem('token', response.data.token)
      goToFeedPage(history)
      
    })
    .catch((error) => {
      //console.log(error)
      alert("Falha no Cadastro, tente novamente")
    })
}

// export const createPost = (body) => {
//   axios.post(`${Base_Url}/labEddit/posts`, body, { 
//     headers: {
//       Authorization: localStorage.getItem("token")
//     }
//   })
//     .then((response)=>{
//      //goToFeedPage(history)
//       //console.log(response)
//     })
//     .catch((error) => {
//       //console.log(error)
//       alert("Falha no Cadastro, tente novamente")
//     })
// }

