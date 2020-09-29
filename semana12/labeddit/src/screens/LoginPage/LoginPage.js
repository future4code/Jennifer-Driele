import React from 'react'
import Button from '@material-ui/core/Button'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/Coordinator'
import useProtectPage from '../../hooks/useProtectPage'


const LoginPage = () => {
  const history = useHistory()
  useProtectPage()
  return (
    <ScreenContainer>
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() =>goToSignUpPage(history)}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          Cadastrar
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}
export default LoginPage
