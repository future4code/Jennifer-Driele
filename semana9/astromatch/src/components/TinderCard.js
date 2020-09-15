import React, {useState, useEffect} from "react";
import axios from "axios";
import {Botão , Card, ImagemCard} from '../styles'
import "./Header.css"
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";


function TinderCard (){
    const[profile, setProfile] = useState([])
    
    
    const getProfile = () => {
    axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:jennifer/person`)
       
        .then(response => {
            setProfile(response.data.profile)
        })
        .catch(err => {
            console.log(err)
        });
}

const onClickLike = () => {
        const body = {
          id: profile.id,
          choice: true,
      };
      axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jennifer/choose-person`, body)
      .then(response => {
        getProfile()
      }).catch(err => {
          console.log(err.message)
      });
    };
    
const onClickUnlike = () => {
      const body = {
        id: profile.id,
        choice: false,
      };
      axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jennifer/choose-person`, body)
      .then(response => {
        getProfile()
      }).catch(err => {
          console.log(err.message)
      });
    };
    useEffect(() => {
        getProfile()
    }, []);
    
   return(
    <div>
        <ImagemCard    src={profile.photo} alt="photo"/>
        <Card> {profile.name} {profile.age}</Card>
        <Card>{profile.bio} </Card>
    <Botão>
        <IconButton className="buttons_left">
            <CloseIcon fontSize="large" onClick={onClickUnlike} />
        </IconButton>
        <IconButton  className="buttons_rigth">
            <FavoriteIcon fontSize="large" onClick={onClickLike}/>
        </IconButton>
    </Botão>
   </div>
   )
}
export default TinderCard;