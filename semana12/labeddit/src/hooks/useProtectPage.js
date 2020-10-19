import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToFeedPage } from '../routes/Coordinator'

const useProtectPage = () => {
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token ){
      goToFeedPage(history)
    }
  }, [history])
}

export default useProtectPage
