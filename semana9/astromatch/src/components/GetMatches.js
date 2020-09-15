import React, {useState ,useEffect} from "react";
import axios from "axios";
import {User} from '../styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from "@material-ui/core/IconButton";


function GetMatches() {
    const [matches , setMatches] = useState([])
    
    
    const getsMatch = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jennifer/matches`)
    .then(response => {
      setMatches(response.data.matches)
    }).catch(err => {
        console.log(err.message)
    });

}
   const onClickClearMatches = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:jennifer/clear`)
        .then(response => {
          setMatches([])
        }).catch(err => {
            console.log(err.message)
        });
      };
    
        useEffect(() => {
            getsMatch()
        },[])
        
        return(
        <div>
            {matches.map(item => {
                 return (
                    <div key={item.name}>
                    <User src={item.photo} alt={item.name}/> 
                    </div>
                  ) 
                })}
                 <IconButton > 
                <DeleteForeverIcon className="header_icon" fontSize="large" color ="primary" fontSize="large" color ="primary" onClick={onClickClearMatches}></DeleteForeverIcon>
                </IconButton>
        </div>
    )
}
export default GetMatches