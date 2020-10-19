import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { useHistory } from 'react-router-dom'
import {goToLoginPage} from '../routes/Coordinator'
import Button from '@material-ui/core/Button'
import {Menu , Imagem} from './styled'
import Reddit from '../assets/reddit.png'

const Header = () => {
  const history = useHistory()
  return(
  <AppBar>
    <Menu>
    <h2>
      <Imagem src={Reddit} alt={'Erro404'}/>
      LabeEddit
    </h2>
    <Button
      onClick={() => goToLoginPage(history)}
      color={'primary'}
      variant={'contained'}
      type={'submit'}
      medianWidth
      margin={'normal'}
         >Login
    </Button>
    </Menu>
  </AppBar>
  )
}
export default Header
