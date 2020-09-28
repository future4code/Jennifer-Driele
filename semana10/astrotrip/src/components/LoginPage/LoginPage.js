import React, {useState,useEffect} from 'react';
import Header from '../Header/Header';
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
 ;
`;
const Logo = styled.h1`
  text-align:center;
  color:rgb(47, 95, 110);
`

function LoginPage() {
  const [emailValue,setEmailValue] = useState("");
  const [passwordValue , setPasswordValue] = useState("")
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === true) {
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
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/login`,body)
    .then((response)=>{
      window.localStorage.setItem("token",response.data.token)
      history.push("/list")
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


    return (
      <div>
      <Header/>
      <Logo>Login</Logo>
        <Container> 
        
        <TextField
          id="filled-basic"
          label="E-mail:"
          variant="filled"
          type="email"
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
          <Button  variant="contained"  onClick={handleLogin} >
            Submit
          </Button>
          </Container>
    </div>
  );
}
export default LoginPage;