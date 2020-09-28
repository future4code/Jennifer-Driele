import React from 'react';
import { Typography } from '@material-ui/core';
import { goToLoginPage , goToFormPage } from '../RouterPage/goToPages';
import styled from "styled-components"; 
import {useHistory} from "react-router-dom";
import '../../App.css';


const Container =styled.div`
  background-color:rgb(47, 95, 110);
  display:grid;
  
`
const Imagem = styled.img`
  height: 80px;
  object-fit: contain;
  width: 80px;
` 
const Botão =styled.button`
  border-radius:8px;
  width:200px;
  height:35px;
  margin-top:50px;
  margin-right:700px;
  margin-left:700px;
  margin-top:80px;
  background-color:rgb(47, 95, 110);
`

function HomePage() {
  const history = useHistory()
    return (
 <div>  
     <Container>
     <Typography variante="h1" align={'center'}gutterBottom>
     <h2> 
        <Imagem src="./imagem/planet.png" /> 
        AstroTrip
        </h2>
     </Typography>
     </Container>
       <Botão onClick={() => goToLoginPage(history)}>Área do Administrador</Botão>
       <Botão onClick={() => goToFormPage(history)}>Quero me Candidatar</Botão>
  </div>
  )
}
 export default HomePage;
  