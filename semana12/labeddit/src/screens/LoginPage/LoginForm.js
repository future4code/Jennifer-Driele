import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, LoginFormContainer,ButtonContained} from './styled'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'

const LoginForm = () => {
  const [form, handleInputChange] = useForm({ email: '', password: ''})
  const history = useHistory()

  const onClickLogin = (event) => {
    event.preventDefault()
      login(form, history)
    }

  return (
      <form >
         
        <LoginFormContainer>
        <h1>Login</h1>
          <InputsContainer>
            <TextField
              value={form.email}
              name={'email'}
              onChange={handleInputChange}
              label={'E-mail'}
              variant={'outlined'}
              type={'email'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />
            <TextField
              value={form.password}
              name={'password'}
              onChange={handleInputChange}
              label={'Senha'}
              variant={'outlined'}
              type={'password'}
              fullWidth
              required
              margin={'normal'}
            />
          </InputsContainer>
          <ButtonContained> 
          <Button  
            onClick={onClickLogin}
            color={'primary'}
            variant={'contained'}
            type={'submit'}
            fullWidth
            margin={'normal'}
          >
               Entrar
          </Button>
          </ButtonContained>
        </LoginFormContainer>
      </form>
  )
}
export default LoginForm
