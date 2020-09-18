
import React from 'react';
import TextField from "@material-ui/core/TextField";
import { useForm } from "../Hooks/UseForm";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useProtectPage } from "../Hooks/useProtectPage";
import HomePage from '../HomePage/HomePage';
import styled from "styled-components";
import { Typography } from '@material-ui/core';


const Container = styled.div`
  font-family: sans-serif;
  margin-top: 50px;
  text-align: center;
  background-color: rgb(47, 95, 110);
  margin-left:500px;
  margin-right:500px
`;

function CreateTripPage() {
  const {form ,onChange ,resetState} = useForm({
    name:"",
    planet:"",
    date:"",
    description:"",
    durationInDays:0
})

const hadledInputChange =(event)=> {
  const {name, value} = event.target;
  onChange(name,value)
}

const handleSubmittion = (event) => {
  event.preventDefault();

  console.log(form);
  resetState();
};

const getCreateTrip =() => {
  const body = {
    name:form.name,
    planet:form.planet,
    date:form.date,
    description:form.description,
    durationInDays:form.durationInDays
  };
  
  axios
  .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/trips",body,{
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
useProtectPage(getCreateTrip)


    return (
      <div>
        <HomePage/>
        <Container> 
      <form  onSubmit={handleSubmittion}> 
      <Typography for ="name">Name:</Typography>
      <TextField
        variant="filled" 
        type="text"
        value={form.name}
        onChange={hadledInputChange}
        pattern="[A-Za-z] {3,}"
        required={true}
      />
      <p>
      <Typography for ="name">Planet:</Typography>
      <Select
        variant="filled"
        type="text"
        value={form.platet}
        onChange={hadledInputChange}
        required={true}
      >
      <MenuItem value=""></MenuItem>
      <MenuItem value="Terra">Terra</MenuItem>
      <MenuItem value="Mercurio">Mercúrio</MenuItem>
      <MenuItem value="Venus">Vênus</MenuItem>
      <MenuItem value="Marte">Marte</MenuItem>
      <MenuItem value="Jupiter">Jupiter</MenuItem>
      <MenuItem value="Saturno">Saturno</MenuItem>
      <MenuItem value="Urano">Urano</MenuItem>
      <MenuItem value="Netuno">Netuno</MenuItem>
      <MenuItem value="Plutao">Plutão</MenuItem>
      </Select>
      </p>
      <p>
      <Typography for ="name">Date:</Typography>
      <TextField
        variant="filled"
        type="date"
        value={form.date}
        onChange={hadledInputChange}
        min="YYYY-MM-DD"
        required={true}
      />
      </p>
      <p>
      <Typography for ="name">Duration:</Typography>
      <TextField
        variant="filled"
        type="number"
        value={form.durationInDays}
        onChange={hadledInputChange}
        min="10"
        required={true}
      />
      </p>
      <Button type="submit" variant="contained" >
      Create Trip
      </Button>
    </form>
    </Container>
    </div>
  );
}
export default CreateTripPage;