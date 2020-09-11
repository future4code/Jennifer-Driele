import React from "react";
import axios from "axios";
import styled from "styled-components";
import { baseUrl, axiosConfig } from "../Constants/axiosConstants";
import DetailsPlayList from "./DetailsPlayList";


const Container =styled.div`
  font-family: sans-serif;
  text-align: center;
  color: #009999 ;
`
const Botão = styled.button`
  background-color:#009999;
  border-radius:10px;
  width:8vw;
  height:5vh;
 
`
const Footer = styled.button`
  margin-top:20px;
  border-radius:10px ;
  width:15vw;
  height:8vh;
`

class ViewPlayList extends React.Component {
   state ={
       playlist:[],
       info:false
   };

   componentDidMount =() =>{
    this.getPlayList();
}


   getPlayList = () => {
    axios
      .get(baseUrl ,axiosConfig)
      .then((response) => {
        this.setState({ playlist:response.data.result.list });
      })
      .catch((erro) => {
        //console.log(erro);
      });
  };

  deletePlay =(id) => {
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
    axiosConfig )

    .then((response) =>{
        alert(`Usuario deletado com sucesso`)
        this.getPlayList()
    })
    .catch((error) =>{
        //console.log(error)
    })
}
onClickInfo = ()=>{
    this.setState({info:!this.state.info.list})
}


render(){
    const pageInfo =(id) =>{
        if(this.state.info){
            return <DetailsPlayList playlistId={id}/>
        }
    }
    return(
        <Container>
             <h2>Suas Playlist</h2>
            {this.state.playlist.map((item) => {
                return(
                   <div>
                       <p key={item.id}>{item.name}</p>
                        <Botão onClick={() =>{if(window.confirm(`Tem certeza que quer deletar ${item.name}?`)) this.deletePlay(item.id)}}>
                            {""} Delete
                        </Botão>
                        <Botão onClick ={this.onClickInfo}>Info</Botão>
                        {pageInfo ()}
                    </div>
                    
                    )
                    })}
                    <Footer onClick={this.props.onClickCreatePage}>Back Page</Footer>
        </Container>
        )
    }
}
export default ViewPlayList