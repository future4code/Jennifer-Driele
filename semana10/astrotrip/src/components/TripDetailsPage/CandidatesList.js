import React from 'react';
import axios from "axios";
import CandidatesItem from "./CandidatesItem"
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import List from '@material-ui/core/List';
import {useParams} from 'react-router-dom';
import '../../App.css';

const Content = styled.div`
display:grid;
grid-auto-flow:column;
gap:32px;
width:35vw;
background-color:rgb(47, 95, 110);
margin-left:50px;

`

 const CandidatesList =( props)=> {
  const pathParams = useParams()

 const decideCandidate =(approve , candidateId)=>{
    const body={
        approve:approve
}
    axios
    .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/trips/${pathParams.id}/candidates/${candidateId}/decide`,body, {
        headers: {
            auth:window.localStorage.getItem("token")
        }
        })
           .then((response) => {
            
             alert("Viagem Cadastrada com sucesso!")
           })
           .catch((err) => {
             console.log(err)
           })
          }
  return (
    <div> 
    <Content>
      <CardContent >
        <Typography variant={'h6'}>
          Lista de Candidatos
        </Typography>
        <List>
         <CandidatesItem/>
        </List>
        </CardContent>
    </Content>
    </div>
  )
 }
 export default CandidatesList

