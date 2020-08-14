import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';


//style

const Titulo = styled.header`
  width: 100%;
  background-color: #660033;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 1em;
  margin-bottom: 1em;
  font-family: Sofia;
  font-size:30px;
 
`


const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`
const PostContainer = styled.div`
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
const PostTitulo = styled.h2`
  color: #660033;
  font-family: Sofia;
`

const InputPost = styled.input`
  height: 40px;
  font-size: 10px;
  width: 50%;
  border: 1px solid #660033;
  margin-bottom: 1em;
  padding-left: 0.5em;
`
const OnButton = styled.button`
  height: 3em;
  width: 9em;
  font-size: 0.9em;
  font-weight: 100;
  background-color:#660033;
  margin-top:2em;
  font-family: Sofia;
`





class App extends React.Component {
  state = { 
    
    listaPost:[ 
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150',
      },
      {
        nomeUsuario:'Jennifer',
        fotoUsuario:'https://picsum.photos/id/237/536/354',
        fotoPost:'https://picsum.photos/536/354'
      },
      {
        nomeUsuario:'Jessica',
        fotoUsuario:'https://picsum.photos/536/354',
        fotoPost:'https://static.quizur.com/i/b/5938920aed54e4.553405975938920add9cb5.73640593.jpg'
      }
    ],
    
    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost:""
  }

onChangeInputNome=(event)=> {
  this.setState({valorInputNome:event.target.value});
};

onChangeInputFoto=(event)=> {
  this.setState({valorInputFoto:event.target.value});
};

onChangeInputPost=(event)=> {
  this.setState({valorInputPost:event.target.value});
};

adicionaPost =()=>{
  const novaPessoa ={
    nomeUsuario:this.state.valorInputNome,
    fotoUsuario:this.state.valorInputFoto,
    fotoPost:this.state.valorInputPost
  }
  
const novoPessoas=[...this.state.listaPost,novaPessoa];
  this.setState({
    listaPost:novoPessoas, 
    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost:""
  })
}

render(){
  
  const listaDeComponentes = this.state.listaPost.map((pessoa) => {
    return(
     <div>
       <Post
       nomeUsuario={pessoa.nomeUsuario} 
       fotoUsuario= {pessoa.fotoUsuario}
       fotoPost= {pessoa.fotoPost}
       />
      </div>
      );
    });
    
    return(
    <AppContainer>
      <Titulo>Insta4</Titulo> 
      <PostContainer>
        <PostTitulo>Adicionar Post!</PostTitulo>
        
        <InputPost
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={"Nome"}
        />
        
        <InputPost
        value={this.state.valorInputFoto}
        onChange={this.onChangeInputFoto}
        placeholder={" Adicionar Foto"}
        />
        
        <InputPost
        value={this.state.valorInputPost}
        onChange={this.onChangeInputPost}
        placeholder={" Adicionar Post"}
        />
        
        <OnButton onClick={this.adicionaPost}>Adicionar</OnButton>
        </PostContainer>
        
        <div>{listaDeComponentes}</div>
    </AppContainer>
    );
  }
}
export default App;
