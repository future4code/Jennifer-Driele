import React from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components";

const Container =styled.div `
    display:grid;
    justify-content:center;
    text-align:center;
`

const List = styled.div`
    width:40vw;
    height:12vh;
    border:1px solid blue;
    font-size:15px;

`
;
 class App extends React.Component {
   state ={
     history:[]
  };

  
    getHistory = () => {
      axios
        .get("https://api.spacexdata.com/v3/history")
        .then((resposta) => {
          this.setState({history:resposta.data});
        })
        .catch((erro) => {
          
        });
    };
    
    componentDidMount() {
        this.getHistory();
      }
      
      render() {
        return (
          <Container>
            {this.state.history.map((item) => {
          return (
            <List>
              <h2 key={item.title}>{item.title}</h2>
            </List>
            );
            })}
          </Container>
          )
        }
 }
 export default App;
