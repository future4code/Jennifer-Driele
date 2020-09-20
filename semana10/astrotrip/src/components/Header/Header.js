import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { goToLoginPage ,goToHomePage,goToSignUpPage } from '../RouterPage/goToPages';
import styled from "styled-components"; 
import {useHistory} from "react-router-dom";
import '../../App.css';
       
       
const Container =styled.div`
  background-color:rgb(47, 95, 110);
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
        <HomeIcon onClick={() => goToHomePage(history)} className="home" style={{ fontSize: 80 }}   />
        <h2> 
          <Imagem src="../imagem/planet.png" /> 
            AstroTrip
        </h2>
          <Botão onClick={() => goToLoginPage(history)}>Login</Botão>
          <Botão onClick={() => goToSignUpPage(history)}>SignUp</Botão>
      </Container>
  )
}
 export default HomePage;
         