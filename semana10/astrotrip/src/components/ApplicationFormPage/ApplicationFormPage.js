import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Header from '../Header/Header';
import { FormControl } from '@material-ui/core';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { useParams } from 'react-router-dom';
import {useForm} from '../Hooks/useForm'
import { useHistory } from "react-router-dom";

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: center;
  background-color: rgb(47, 95, 110);
  margin-left:500px;
  margin-right:500px;
  height:100vh;
  padding-top:20px;
`;

function ApplicationFormPage () {
  const params = useParams()
  const history = useHistory()
   const[trips,setTrips] = useState([])
  const {form,onChange, resetState} = useForm ({
    name:"",
    age:0,
    applicationText:"",
    profession:"",
    country:"",
    trip: null
  })


  const onChangeInput = (event) => {
    const {name,value}= event.target

    onChange(name,value)
  }

useEffect(() => {
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/trips`)
  .then((response)=> { 
  setTrips(response.data.trips)
})
}, [])

const onSubmitApplication =(event) => {
  event.preventDefault()
  const body = {
    name:form.name,
    age:form.age,
    applicationText:form.applicationText,
    profession:form.profession,
    country:form.country
  }
 
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/trips/${params.id}/apply`,body)
    .then((response)=>{
   alert(`Sua inscrição foi realizada com sucesso!`)
     history.push("/list")
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })
    resetState()
}

  return (
    <div>
      <Header/>
  <Container2>
          <h2>Aplicar para Trip</h2>
          <form  onSubmit={onSubmitApplication}  >  
    <TextField 
     variant="filled"
      label={'Nome'}
      onChange={onChangeInput}
      value={form['name']}
      name={'name'}
    />
    <p>
    <TextField 
      label={"Idade:"}
      variant="filled"
      type="number"
      value={form['age']}
      onChange={onChangeInput}
      name={'age'}
    />
    </p>
    <p>
    <TextField
      label={"Texto de aplicação:" }
      helperText="Explique por que você é uma boa pessoa"
      variant="filled"
      type="text"
      value={form['apllicationText']}
      onChange={onChangeInput}
      name={'applicationText'}
    />
    </p>
    <p>
    <TextField
      label={"Profissão:"}
      variant="filled"
      type="text"
      value={form['profession']}
      onChange={onChangeInput}
      name={'profession'}
    />
    </p>
    <p> 
    <FormControl>
    <InputLabel  id="select-países">Países</InputLabel>
    <Select
    labelId ="select-países"
    onChange={onChangeInput}
    value={form['country']}
    name={'country'}
    variant="filled"
    >
    <MenuItem value=""></MenuItem>
      <MenuItem value="Brasil">Brasil</MenuItem>
      <MenuItem value="Argentina">Argentina</MenuItem>
      <MenuItem value="Estados Unidos">Estados Unidos</MenuItem>
    </Select>
    </FormControl>
    </p>
<p>
    <FormControl>
    <InputLabel  id="select-viagens">Viagens</InputLabel>
    <Select
     variant="filled"
    labelId ="select-viagens"
    >
    {trips.map((trip)=> {
      return (
      <MenuItem value={trip}>{trip.name}</MenuItem>
      )
    })}
    
    </Select>
    </FormControl>
    </p>
      <Button  variant="contained" type={'submit'}>
        Submit
      </Button>
      </form>
  </Container2>
 
    </div>
  );
}
export default ApplicationFormPage ;