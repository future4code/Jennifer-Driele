import React, { useState } from 'react';

import './App.css';
import Post from './components/Post'
import styled from 'styled-components';
import axios from 'axios';

const Header = styled.div`
 height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#003380;
  color: white;
  font-size:25px ;
  padding:30px;

`
const Botão = styled.button`
  margin-left:10px;
  border-radius:10px;
  width:80px;
  height:35px;
  background-color:#003380;
  color:white;
`

function App() {
  
const [inputTask, setInputTask] = useState("")
const [inputDay, setInputDay]= useState("")
 

const onChangeDay = (event) =>{
  setInputDay(event.target.value)
}

const onChangeInput = (event) =>{
  setInputTask(event.target.value)
}

const addPost =  () => {
  const body = {
    text: inputTask,
    day: inputDay
  }
  axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jennifer`, body)
    .then((response) => {
      setInputTask(response.data)
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
}

  
return (
  <div>
  <Header>
<p>Nova Tarefa:</p>
      <input type="text"  onChange={onChangeInput} className="tarefa" />
      <select name="dias-semana" onChange={onChangeDay} className="dias-semana">
        <option value="domingo">Domingo</option>
        <option value="segunda">Segunda-feira</option>
        <option value="terca">Terça-feira</option>
        <option value="quarta">Quarta-feira</option>
        <option value="quinta">Quinta-feira</option>
        <option value="sexta">Sexta-feira</option>
        <option value="sabado">Sábado</option>
      </select>
      <Botão onClick={addPost}>Criar tarefa</Botão>
     
    </Header>
    <Post/>
 </div>
 
);
}

export default App;
