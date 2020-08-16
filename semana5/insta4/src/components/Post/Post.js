import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeBookmarkBranco from '../../img/bookmarkBlack.svg'
import iconeBookmarkPreto from '../../img/bookmark.svg'
import iconeCompartilhar from '../../img/share.svg'

import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido:false ,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo:true,
    compartilhar:false
    
  }

  onClickCurtida = () => {
    if(this.state.curtido){
      this.setState({curtido:false,numeroCurtidas:this.state.numeroCurtidas -1})
    }else{ 
      this.setState({curtido:true,numeroCurtidas:this.state.numeroCurtidas + 1})
    }
   console.log("Curtiu")
  }

  onClickSalvar = () =>{
    console.log("Post salvo")
    this.setState({
      salvo:!this.state.salvo})
  }
  

  onClickComentario = () => {
    this.setState({

      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () =>{
    
    this.setState({
      compartilhar:!this.state.compartilhar})
  }
  

  aoEnviarComentario = () => {
    this.setState({
      comentando: true,
      numeroComentarios: this.state.numeroComentarios + 1, comentando:false
    })
  }

  aoCompartilhar =() =>{
    this.setState({
      compartilhar:false,
    })

    }
   

  render() {
    let iconeCurtida
    let iconeSalvar

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.salvo) {
      iconeSalvar = iconeBookmarkPreto
    } else {
      iconeSalvar = iconeBookmarkBranco
    }

    let componenteComentario
    let componenteCompartilhar

    if(this.state.comentando) {
      componenteComentario =<SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    
    if(this.state.compartilhar) {
      componenteCompartilhar =<SecaoCompartilhar aoCompartilhar={this.aoCompartilhar}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
      <div className={'user-info'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>
      <IconeComContador 
        icone={iconeSalvar}
        onClickIcone={this.onClickSalvar}
        />
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

      <img className={'share-icon'}src={iconeCompartilhar} onClick={this.onClickCompartilhar} />
     
     <div>
       {componenteCompartilhar}
     </div>

     </div>                
     {componenteComentario}
    </div>
  }
}

export default Post