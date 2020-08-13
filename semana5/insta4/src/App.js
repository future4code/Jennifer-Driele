import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = { 
    
    listaPost:[ 
        { 
          nomeUsuario:'paulinha',
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
  this.setState({listaPost:novoPessoas, valorInputNome: "",valorInputFoto: "",valorInputPost:""})

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
    <div className={'app-container'}>
      <input
      value={this.state.valorInputNome}
      onChange={this.onChangeInputNome}
      placeholder={"Nome"}
      />
      
      <input
      value={this.state.valorInputFoto}
      onChange={this.onChangeInputFoto}
      placeholder={" Adicionar Foto"}
      />
      
      <input
      value={this.state.valorInputPost}
      onChange={this.onChangeInputPost}
      placeholder={" Adicionar Post"}
      />
      <button onClick={this.adicionaPost}>Adicionar</button>
    
    <div>{listaDeComponentes}</div>
    </div>
  );
  }
}


export default App;
