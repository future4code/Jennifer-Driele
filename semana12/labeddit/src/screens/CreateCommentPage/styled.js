import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import Typography  from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'


     
export const Arrow = styled(Fab)`
  position: fixed !important;
  left:10px;
` 
export const Letter = styled(Typography)`
  margin-top:50px;
  text-align:center;
`
export const CardPrincipal = styled(Card)`
  border: 2px solid #6699ff;
`
export const Card3= styled.div `
  width:70vw;
  max-width:800px;
`   
 
export const Container = styled.div`
  width:80vw;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow:5px 5px 5px 5px black;
`
export const PostTitulo = styled.h2`
  color:#6699ff ;
  font-family: Sofia;
`
export const InputPost = styled.input`
  height: 40px;
  font-size: 10px;
  width: 50vw;
  max-width:200px;
  border: 1px solid #6699ff;
  margin-bottom: 1em;
  padding-left: 0.5em;
`
export const PostContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  width: 25vw;
  height: 15em;
  margin-bottom: 1em;
  padding-bottom: 1em;
  text-align:center;
    `  

export const FeedWrapper = styled.div`
  display: grid;
  gap: 20px;
  width:80vw;
  max-width: 500px;
  margin: 0 auto;
`
export const Post =styled.div`
  display: grid;
  gap: 20px;
  width:80vw;
  max-width: 500px;
  margin: 0 auto;
`
