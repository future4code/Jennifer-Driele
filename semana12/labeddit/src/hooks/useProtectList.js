import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

import { listPost } from '../services/user'

const useProtectList = () => {
 useEffect(() => {
    const token = localStorage.getItem('token')
     listPost()
  }, [])
}

export default useProtectList
