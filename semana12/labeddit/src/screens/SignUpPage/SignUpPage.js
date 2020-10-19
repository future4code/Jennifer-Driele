import React from 'react'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import useProtectPage from '../../hooks/useProtectPage'

const SignUpPage = () => {
  useProtectPage()
  return (
    <ScreenContainer>
      <SignUpForm />
    </ScreenContainer>
  )
}

export default SignUpPage
