import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

import { goToLoginPage ,goToTripListPage } from '../RouterPage/goToPages';
import styled from "styled-components"; 
import {useHistory} from "react-router-dom";
import '../../App.css';


const Container =styled.div`
background-color:grey;
padding:10px;
display:flex;
justify-content:space-around;
`

 const Imagem = styled.img`
  height: 80px;
  object-fit: contain;
  width: 80px;
  
 
` 
const Botão =styled.button`
border-radius:8px;
width:90px;
height:35px;
margin-top:50px;

`

function HomePage() {
  const history = useHistory()
    return (

     
        <Container> 
          
        <HomeIcon onClick={() => goToTripListPage(history)} className="home" style={{ fontSize: 80 }}   />
       
        <h2> 
        <Imagem src="./imagem/planet.png" alt='logo'/> 
        AstroTrip
        </h2>
       <Botão onClick={() => goToLoginPage(history)}>Login</Botão>
        <Botão onClick={() => goToLoginPage(history)}>Login</Botão>
      
       </Container>
  
    )
  }
  
  export default HomePage;
  