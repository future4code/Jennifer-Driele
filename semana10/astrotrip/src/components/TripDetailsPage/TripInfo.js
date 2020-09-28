import React, {useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import {useParams} from 'react-router-dom';
import {CardContent, CardActions} from '@material-ui/core';
import '../../App.css';
import styled from "styled-components"; 
import {goBack} from '../RouterPage/goToPages';




const Botao =styled.button`
  border-radius:8px;
  width:200px;
  height:35px;
  margin-top:50px;
 margin-left:40px;
`


function TripInfo () {
  const [trip, setTrip] = useState({})
  const [candidates,setCandidates]= useState([
    {
     
      applicationText: "Quero muuuuuuito ir!!!",
      profession: "Chefe",
      age: 20,
      name: "Astrodev",
      country: "Brasil"
    }
  ])
  const history = useHistory();
  const pathParams = useParams()
 



  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      getTripDetail();
    } else {
      history.push("/");
    }
  }, [history]);  

  const getTripDetail = () => {
   axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/trip/${pathParams.id}`,{
        headers: {
          auth:window.localStorage.getItem("token")
          }
       })
      
      .then((response) => { 
        setTrip(response.data.trip)
        setCandidates()
        console.log(response.data.trip);

      })
      .catch((err) => {
        console.log(err.message);
      });
  }
 

  
return(


    <div>
{/*    
     {candidates.map(item =>{
        return(
          <h2>{item.name}</h2>
          
       )
      })} */}
   
 
        <CardContent className="card" >
        <Typography  className="list" gutterBottom variant="h4" component="h2">
           {trip.planet}
        </Typography>
        <Typography  className="list" variant="body2"  component="p">
           {trip.durationDays}
        </Typography>
        <Typography  className="list" variant="body1" color="textPrimary" component="h4">
           {trip.date}
        </Typography>
        <Typography className="list" variant="body1" color="textPrimary" component="h5">
           {trip.name}  
        </Typography>
        <Typography className="list" variant="body1" color="textPrimary" component="h5">
            {trip.description} 
        </Typography>
                      

        </CardContent>
        <CardActions>
          <Botao onClick={()=> goBack(history)}>Voltar</Botao>
        </CardActions>

 
    </div>
  )
}
export default TripInfo ;