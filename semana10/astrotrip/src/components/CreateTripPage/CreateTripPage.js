
import React from 'react';
import TextField from "@material-ui/core/TextField";
import { useForm } from "../Hooks/useForm";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Header from '../Header/Header';
import styled from "styled-components";



const Container = styled.div`
  font-family: sans-serif;
  margin-top: 50px;
  padding-top:20px;
  text-align: center;
  background-color: rgb(47, 95, 110);
  margin-left:500px;
  margin-right:500px;
  height:100vh;
`;

function CreateTripPage() {
  // const [date,setDate] = useState(new Date())
  const {form ,onChange ,resetState} = useForm({
    name:"",
    planet:"",
    date:"",
    description:"",
    durationInDays:0
})

const hadledInputChange =(event)=> {
  const {name,value}= event.target

    onChange(name,value)
}


const handleSubmittion =(event) => {
  event.preventDefault();
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
     resetState();
}



    return (
      <div>
     <Header/>
     
        <Container>
        <h2>Crie sua Trip </h2> 
      <form  onSubmit={handleSubmittion}> 
     
     <TextField
        label={"Nome"}
        variant="filled" 
        value={form['name']}
        onChange={hadledInputChange}
        pattern="[A-Za-z] {3,}"
        required={true}
      />
      <p>
     
     <Select
     l  label={"Planet"}
        variant="filled"
        value={form['planet']}
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
      <TextField
      
        variant="filled"
        value={form['date']}
        onChange={hadledInputChange}
        min="YYYY-MM-DD"
        type="date"
        required={true}
      />
      </p>
      <p>
     <TextField
     label={"Duração"}
        variant="filled"
        type="number"
        value={form['durationInDays']}
        onChange={hadledInputChange}
        min="10"
        required={true}
      />
      </p>
      <Button type={"submit"} variant="contained" >
      Criar
      </Button>
    </form>
    </Container>
    </div>
  );
}
export default CreateTripPage;