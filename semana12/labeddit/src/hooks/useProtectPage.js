import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToPostPage } from '../routes/Coordinator'

const useProtectPage = () => {
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      goToPostPage(history)
    }
  }, [history])
}

export default useProtectPage
