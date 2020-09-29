import styled from 'styled-components'

export const AppContainer = styled.div`
    width:80vw;
    max-width: 300px;
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
export const Botão = styled.button`
    border-radius:8px;
    width:80px;
    height:30px;
    background:#6699ff;
    color:white;

`