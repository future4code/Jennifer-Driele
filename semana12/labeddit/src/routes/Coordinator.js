export const goToLoginPage = (history) => {
    history.push('/login')
  }
  
  export const goToSignUpPage = (history) => {
    history.push('/signup')
  }
  
  export const goToPostPage = (history) => {
    history.push('/post')
  }
  
  export const goToComentPage = (history,id) => {
    history.push(`/comentario/${id}`)
  }
  
  export const goToListPage = (history, id) => {
    history.push(`/list/${id}`)
  }
  