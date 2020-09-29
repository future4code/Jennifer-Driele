
import axios from 'axios';
import {Base_Url}  from '../constants/urls';
import { goToPostPage} from '../routes/Coordinator';

export const login = (body, history) => {
  axios.post(`${Base_Url}/labEddit/login`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      goToPostPage(history)
     
    })
    .catch((error) => {
      console.log(error)
      alert("Falha no Login, tente novamente")
    })
}

export const signUp = (body, history) => {
  axios.post(`${Base_Url}/labEddit/signup`, body)
    .then((response)=>{
      localStorage.setItem('token', response.data.token)
      goToPostPage(history)
      
    })
    .catch((error) => {
      console.log(error)
      alert("Falha no Cadastro, tente novamente")
    })
}
