import React, {useState , useEffect} from 'react';
import { axiosConfig } from '../constants/axiosContants';
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
  color: #cecece;
`;

const Logo = styled.h1`
  text-align:center;
  color:rgb(47, 95, 110);
`

function SignUp () {
    const [emailValue,setEmailValue] = useState("");
    const [passwordValue , setPasswordValue] = useState("")
    const history = useHistory()
     
  const handleEmailChange = (event)=> {
    setEmailValue(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };
  
    useEffect(() => {
      const token = window.localStorage.getItem("token");
      if (token === true) {
      history.push("/list")
      }
    }, [history]);
  
  
  
    const handleSignUp = () => {
       const body = {
          email:emailValue,
          password:passwordValue
      };
      axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/signup`,body,axiosConfig)
      .then((response)=>{
        window.localStorage.setItem("token",response.data.signup)
        history.push("/list")
        console.log(response.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  
  
      return (
        <div>
         <Header/>
         <Logo>SignUp</Logo>
          <Container>
         
          <TextField
                id="filled-basic"
                label="E-mail:"
                variant="filled"
                type="email"
                value={emailValue}
                onChange={handleEmailChange }
                
                
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
                 <Button variant="contained" onClick={handleSignUp}  >
              Submit
            </Button>
          
            </Container>
       
        </div>
      );
    }
    
export default SignUp
