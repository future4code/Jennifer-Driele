
import React, {useState} from "react";
import  "./components/Header.css"
import { AppContainer,Imagem } from './styles'
import TinderCard from "./components/TinderCard";
import GetMatches from "./components/GetMatches";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MenuIcon from '@material-ui/icons/Menu';
import HowToRegIcon from '@material-ui/icons/HowToReg';


 function App() {
   const [page , setPage] = useState (true)

   const changePage = () => {
     setPage(!page)
   } 

   const changeButton = () => {
       return page
       ? <IconButton onClick={changePage}><HowToRegIcon className="header_icon" fontSize="large" color ="primary" /></IconButton>
       : <IconButton onClick={changePage}><ArrowBackIosIcon fontSize="large" className="header_icon" color ="primary" /></IconButton>
   }
  
  return (
    <AppContainer>
      <div className ="header">
        <IconButton>
          <MenuIcon  fontSize="large"color ="primary"/>
        </IconButton>
        <h2>
        Astro Match
        <Imagem  src="./imagem/tinder.png" alt="logo" />
        </h2>
        {changeButton()}
     </div>
     {page ? <TinderCard/> : <GetMatches/> }
    </AppContainer>
  );
}
export default App