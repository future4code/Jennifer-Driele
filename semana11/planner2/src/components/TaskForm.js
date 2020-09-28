import React, { useState } from 'react';
//import MenuItem from '@material-ui/core/MenuItem';
//import Select from '@material-ui/core/Select';
import '../App.css';

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

function TaskForm() {
  
const [newTask,  setNewTask] = useState("")
const [newDay, setNewDay]= useState("")


const onChangeInput = (event) =>{
  setNewTask(event.target.value)
}

const onChangeDay = (event) =>{
  setNewDay(event.target.value)
}

 
const getCreateTarefa = (props) => {
   
    const body = {
    "text": newTask,
    "day": newDay
  }
  axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jennifer`, body)
    .then((response) => {
     props.updateTasks()
     setNewTask(response.data)
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
}

  
return (
  <div>
  <Header >
<p>Nova Tarefa:</p>
      <input 
      type="text" 
       onChange={onChangeInput} 
       className="tarefa"
       value={newTask} 
       placeholder={"Nova tarefa"}
       />
      <select
      name="dias-semana" 
      onChange={onChangeDay}
      value={newDay} 
      className="dias-semana"
     >
        <option value="domingo">Domingo</option>
        <option value="segunda">Segunda-feira</option>
        <option value="terca">Terça-feira</option>
        <option value="quarta">Quarta-feira</option>
        <option value="quinta">Quinta-feira</option>
        <option value="sexta">Sexta-feira</option>
        <option value="sabado">Sábado</option> 
      </select>
      <Botão onClick={getCreateTarefa} >Criar tarefa</Botão>
    </Header>
    
 </div>
 
);
}

export default TaskForm;
  
 
  

 
 
