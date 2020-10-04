import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { Container,PostContainer,PostTitulo,InputPost} from './styled'

const NewPostForm = (props) => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const createPost = () => {
    props.handleCreatePost(text, title);
  }

  return (
    <Container>
     <PostContainer> 
    <PostTitulo>Adicionar Post!</PostTitulo>
      <InputPost
        placeholder={"Título"}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <InputPost
        placeholder={"Texto"}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button 
      onClick={createPost}
      color={'primary'}
      variant={'contained'}
      type={'submit'}
      medianWidth
      margin={'normal'}
      >Novo Post!</Button>
      </PostContainer>
    </Container>
  )
}
export default NewPostForm;
