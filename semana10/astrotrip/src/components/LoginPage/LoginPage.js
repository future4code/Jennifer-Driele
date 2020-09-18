import React, {useState,useEffect} from 'react';
import HomePage from '../HomePage/HomePage';
import axios from "axios";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: center;
  color: #cecece;
`;

function LoginPage() {
  const [emailValue,setEmailValue] = useState("");
  const [passwordValue , setPasswordValue] = useState("")
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
    history.push("/list" )
    }
  }, [history]);

  const handleEmailChange = (event)=> {
    setEmailValue(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };


  const handleLogin = () => {
    const body = {
      email: emailValue ,
      password: passwordValue 
    };
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/login`, body)
    .then((response)=>{
      window.localStorage.setItem("token",response.data.token)
      history.push("list")
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


    return (
      <div>
        <HomePage/>
        <Container> 
        <TextField
          id="filled-basic"
          label="E-mail:"
          variant="filled"
          type="text"
          value={emailValue}
          onChange={handleEmailChange}
        />
        <br/>
        <TextField
          id="filled-basic"
          label="Password:"
          variant="filled"
          type="text"
          value={passwordValue}
          onChange={handlePasswordChange}
        />
        <br/>
          <Button variant="contained" onClick={handleLogin} >
            Submit
          </Button>
          </Container>
    </div>
  );
}
export default LoginPage;