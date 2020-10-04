export const goBack = (history) => {
  history.goBack();
};

export const goToLoginPage = (history) => {
    history.push('/')
  }
  
  export const goToSignUpPage = (history) => {
    history.push('/signup')
  }
  

  
  export const goToCommentPage = (history,postId) => {
    history.push(`/post/${postId}`)
  }
  
  export const goToFeedPage = (history) => {
    history.push('/feed')
  
  }
  