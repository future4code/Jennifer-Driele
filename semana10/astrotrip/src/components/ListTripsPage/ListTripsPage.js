
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import {goToFormPage,goToDetailsPage} from '../RouterPage/goToPages';
import Typography from '@material-ui/core/Typography';
import HomePage from '../HomePage/HomePage';
import {CardActions ,CardActionArea,CardContent} from '@material-ui/core';
import '../../App.css';
import styled from "styled-components"; 
 
const Botao =styled.button`
  border-radius:8px;
  width:200px;
  height:35px;
  margin-top:50px;

`
function ListTripsPage () {
  const[trips, setTrips] = useState([])
  const history = useHistory()

  
const getListTrip = () =>{
 axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/trips`)
   
    .then((response)=> {
      setTrips(response.data.trips)
      console.log(response)
    })
    .catch((err)=> {
      console.log(err)
    });
  }
  useEffect(() => {
    getListTrip()
  }, [])
 

    return(
<div>
<HomePage/>
  {trips.map(trip => {
    return(
      <div key={trip.id}> 
      <CardActionArea  className="card2"> 
    <CardContent  className="card">
      <Typography  className="list" gutterBottom variant="h4" component="h2">
       {trip.name}
       </Typography>
         <Typography  className="list" variant="body2"  component="p">
       {trip.description}
      </Typography>
        
      <Typography  className="list" variant="body1" color="textPrimary" component="h4">
       {trip.planet}
      </Typography>
      <Typography className="list" variant="body1" color="textPrimary" component="h5">
       {trip.date}  {trip.durationInDays}
      </Typography>

      <Typography className="list" variant="body1" color="textPrimary" component="h5">
        {trip.durationInDays} dias
      </Typography>
      <CardActions>
       <Botao onClick={()=> goToFormPage(history)}>Inscreva-se</Botao>
       <Botao onClick={()=> goToDetailsPage(history, trip.id)}>Detalhes da Viagem</Botao>
     </CardActions>
     </CardContent>
     </CardActionArea>
</div> 
    )
  })}
</div>
 );
}
export default ListTripsPage ;