import React from 'react';
import { AppContainer,PostContainer,PostTitulo,InputPost,Botão} from './styled'

function AddPostPage ()  {

  return(
    <AppContainer>  
    <PostContainer>
      <PostTitulo>Adicionar Post!</PostTitulo>
      <InputPost></InputPost>
      <InputPost></InputPost>
      <Botão>Postar</Botão>
    </PostContainer>
    </AppContainer>
  ) 
}

export default AddPostPage
