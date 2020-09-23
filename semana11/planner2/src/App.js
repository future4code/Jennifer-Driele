import React, { useState, useEffect } from 'react';

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
  const [tarefa, setTarefa] = useState([])


  useEffect(() => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jennifer`)
      .then((response) => {
        setTarefa(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const getCreateTarefa = () => {
    const body = {
      text: tarefa.text,
      day: tarefa.day,
    }
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jennifer`, body)
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      {/*           
    {tarefa.map((item)=>{
        return(
          <div>{item.text}-{item.day}</div>
        )
      // })} */}
      <Header>

        <p>Nova Tarefa:</p>
        <input type="text" className="tarefa" />
        <select name="dias-semana" className="dias-semana">
          <option value="domingo">Domingo</option>
          <option value="segunda">Segunda-feira</option>
          <option value="terca">Terça-feira</option>
          <option value="quarta">Quarta-feira</option>
          <option value="quinta">Quinta-feira</option>
          <option value="sexta">Sexta-feira</option>
          <option value="sabado">Sábado</option>
        </select>
        <Botão onClick={getCreateTarefa}>Criar tarefa</Botão>

      </Header>
      <Post />


    </div>
  );
}

export default App;
