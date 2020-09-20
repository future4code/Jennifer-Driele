import React from 'react';
import Header from '../Header/Header';
import CandidatesList from './CandidatesList';
import TripInfo from './TripInfo';
import styled from "styled-components";



const Content = styled.div`
display:grid;
grid-auto-flow:column;
gap:80px;
margin-top: 30px;
width:40vw;
background-color:rgb(47, 95, 110);
margin-left:170px;

`


function TripDetailsPage () {

  return(
    <div>
      <Header />
     <Content> 
      <TripInfo/>
      <CandidatesList/>
      </Content>
    </div>
  )
}
export default TripDetailsPage