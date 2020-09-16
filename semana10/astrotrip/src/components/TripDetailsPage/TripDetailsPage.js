import React, {useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {goToFormPage,goToDetailsPage} from '../RouterPage/goToPages';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useParams} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import {CardActions ,CardActionArea,CardContent} from '@material-ui/core';
import '../../App.css';

function TripDetailsPage () {
  const [trip ,setTrip] = useState({})
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
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/trip/${pathParams}aK1H3e8bYjl5hIgwYgpv`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        setTrip(response.data.trip)
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
    return (
      <div>
        <HomePage/>
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
       {trip.date}  
      </Typography>

      <Typography className="list" variant="body1" color="textPrimary" component="h5">
        {trip.durationInDays} 
      </Typography>
      
     </CardContent>
     </CardActionArea>
      </div>
    );
  }
  
  export default TripDetailsPage ;