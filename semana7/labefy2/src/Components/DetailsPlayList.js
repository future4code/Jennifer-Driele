import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../Constants/axiosConstants";


class DetailsPlayList extends React.Component {
 state={
     list:[]
 }

 componentDidMount = () =>{
    this.infoPlayList(this.props.idPlaylist)
}

 infoPlayList = (id) =>{
     axios
     .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
     axiosConfig)
     .then((response) =>{
         console.log(response)
         this.setState({list:response.data.result.tracks})
     })
     .catch((error)=>{
         console.log(error)
     })
 }


 render(){
    
     return(
         <div>
             {this.state.list.map((play) =>{
                 return( 
                     <div>
                     <p key={play.id}>{play.name}</p>
                     <audio autoplay="autoplay"controls="controls">
                         <source src={play.url} type="audio/mp3"/>
                     </audio>
                     </div>
                 )
             })};
         </div>
     )
 }
}
export default DetailsPlayList