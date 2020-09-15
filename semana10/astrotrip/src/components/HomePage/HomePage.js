import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { goToLoginPage ,goToHomePage } from '../RouterPage/goToPages';
import styled from "styled-components"; 
import {useHistory} from "react-router-dom";


const Container =styled.div`
background-color:grey;
padding:20px;
`

 const Imagem = styled.img`
  height: 40px;
  object-fit: contain;
  width: 50px;
` 
function HomePage() {
  const history = useHistory()
    return (

      <Container>
        <HomeIcon onClick={() => goToHomePage(history)} />
        <Imagem src="./imagem/planet.png" alt='logo'/>
       <h2>Astrotrip</h2>
       <Button onClick={() => goToLoginPage(history)} variant="contained">Login</Button>
      </Container>
     
  
    )
  }
  
  export default HomePage;
  