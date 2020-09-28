import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useHistory } from 'react-router-dom'
import {goToLoginPage, goToSignUpPage } from '../routes/Coordinator'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const Menu = styled.div`
display:flex;
justify-content:space-between;
margin-left:45px;
`
const Header = () => {
  const history = useHistory()
  return(

    <AppBar>
      <Toolbar>
      <Menu>
         <h2>LabeEddit</h2>
        <Button onClick={() => goToLoginPage(history)}>Login</Button>
        <Button onClick={() => goToSignUpPage(history)}>SignUp</Button>
        </Menu>
      </Toolbar>
    </AppBar>
  
  )
}

export default Header
