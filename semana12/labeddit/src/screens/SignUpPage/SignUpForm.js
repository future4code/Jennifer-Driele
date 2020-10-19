import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer, ButtonCast} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user'

const SignUpForm = () => {
  const [form, handleInputChange] = useForm({username: '', email: '', password: ''})
  const history = useHistory()

  const onClickSignUp = (event) => {
    event.preventDefault()
     signUp(form, history)
    }
  

  return (
    <form >
      <SignUpFormContainer>
          <h1>Cadastrar</h1>
        <InputsContainer>
          <TextField
            value={form.username}
            name={'username'}
            onChange={handleInputChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={handleInputChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
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
        <ButtonCast>
        <Button
          onClick={onClickSignUp}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
           Cadastro
        </Button>
        </ButtonCast>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm
