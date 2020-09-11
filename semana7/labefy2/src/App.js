import React from 'react';
import styled from "styled-components";
import axios from "axios";
import AddPlayList from "./Components/AddPlayList";
import CreatePlayList from "./Components/CreatePlayList";
import DetailsPlayList from "./Components/DetailsPlayList";
import ViewPlayList from "./Components/ViewPlayList"



class App extends React.Component {
  state ={
    pagePlaylist:false,
    pageCreatePlaylist:true
};

onClickPage =() =>{
  this.setState({
    pagePlaylist:!false,
    pageCreatePlaylist:!true

  })
}

onClickCreatePage = ()=>{
  this.setState({
    pagePlaylist:false,
    pageCreatePlaylist:true
  })
}

onClickInfoPage = ()=>{
  this.setState({
    pagePlaylist:false,
    pageCreatePlaylist:true
  })
}

render(){
  const pages =()=>{
    if(this.state.pageCreatePlaylist){
      return<CreatePlayList onClickPage={this. onClickPage}/>
    }
    if(this.state.pagePlaylist){
      return<ViewPlayList onClickCreatePage={this.onClickCreatePage}/>
    }
    if(this.state.pagePlaylist){
      return<DetailsPlayList onClickInfoPage={this.onClickInfoPage}/>
    }
  }
    return(
      <div>
        {pages()}
        </div>
    )
  }
}
export default App;
