import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import HomePage from '../HomePage/HomePage';
import {  axiosConfig } from "../constants/axiosContants";

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: center;
  background-color: rgb(47, 95, 110);
  margin-left:500px;
  margin-right:500px

`;

function ApplicationFormPage () {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [apllicationText , setApllicationText] = useState("")
  const [profession, setProfession] = useState("")
  const [country, setCountry] = useState("")
  const history = useHistory()
  //const [approve, setApprove] = useState(true)

  
  const handleName = (event) => {
   setName( event.target.value );
  };
  const handleAge = (event) => {
   setAge( event.target.value );
  };
  const handleApllication = (event) => {
   setApllicationText( event.target.value );
  };
  const handleProfession = (event) => {
    setProfession( event.target.value );
  };
  const handleCountry = (event) => {
    setCountry( event.target.value );
  };


  const handleApllicationForm = () => {
    const body = {
      name:name,
      age:age,
      apllicationText :apllicationText ,
      profession:profession,
      country:country 
    };
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/trips/:id/apply`, body,axiosConfig)
    .then((response)=>{
      window.localStorage.setItem("token",response.data.token)
      history.push("/")
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  return (
    <div>
      <HomePage/>
  <Container2>
          <h2>Increva-se</h2>
    <TextField 
      id="name" 
      label="Name:" 
      variant="filled" 
      type="text"
      value={name}
      onChange={handleName}
      pattern="[A-Za-z] {3,}"
      required
    />
    <p>
    <TextField 
      id="filled-basic"
      label="Age:"
      variant="filled"
      type="text"
      value={age}
      onChange={handleAge}
    />
    </p>
    <p>
    <TextField
      id="filled-basic"
      label="Apllication Text:"
      variant="filled"
      type="text"
      value={apllicationText}
      onChange={handleApllication}
    />
    </p>
    <p>
    <TextField
      id="filled-basic"
      label="Profession:"
      variant="filled"
      type="text"
      value={profession}
      onChange={handleProfession}
    />
    </p>
    <p>
    <TextField
      id="filled-basic"
      label="Country:"
      variant="filled"
      type="text"
      value={country}
      onChange={handleCountry}
    />
    </p>
      <Button variant="contained" onClick={handleApllicationForm}>
        Submit
      </Button>
  </Container2>
    </div>
  );
}
export default ApplicationFormPage ;