import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToFeedPage } from '../routes/Coordinator'

const useProtectedPage = () => {
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token === true){
      goToFeedPage(history)
    }
  }, [history])
}

export default useProtectedPage
