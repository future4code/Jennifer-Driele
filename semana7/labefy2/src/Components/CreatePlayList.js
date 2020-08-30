import React from "react";
import axios from "axios";
import styled from "styled-components";
import { baseUrl, axiosConfig } from "../Constants/axiosConstants";

const Header = styled.div`
  font-family: sans-serif;
  text-align:center;
  color: #009999 ;
  margin-top:50px;
`
const Botao = styled.button`
  background-color:#009999;
`


class CreatePlayList extends React.Component {
    state = {
     playlist:"",  
    };

    
    onChangePlay =(event) =>{
       this.setState({playlist:event.target.value}) ;
    };

    

    createPlay = () => {
        const body = {
            name:this.state.playlist
        };
        axios
        .post(baseUrl,body , axiosConfig)
        .then((response) => {
            console.log (response)
            this.setState({playlist:""})
        })
        .catch((error) => {
            console.log(error);
        });

    };

    render() {
        return(
            <Header>
                <input
                value={this.state.playlist}
                onChange={this.onChangePlay}
                />
                <Botao onClick={this.createPlay}>
                   Create
                </Botao>
                <p onClick={this.props.onClickPage}>Next Page</p>
            </Header>
        );
    }
}
export default CreatePlayList;
