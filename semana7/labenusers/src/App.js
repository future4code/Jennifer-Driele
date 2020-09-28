import React from 'react';

import UserListPage from './components/UserListPage';
import CreateUserForm from './components/CreateUserForm'
import styled from 'styled-components';

const AppContainer = styled.div`
    font-family: sans-serif;
    text-align: center;
 
`
const BotaoTrocar = styled.button`
    margin: 30px auto;
    display: flex;
    justify-content: center;
    border: none;
    background-color:#993366 ;
    border-radius:10px;
    padding: 0.5em 5em;
  
`

class App extends React.Component {
  state = {
    currentPage:"createUserForm"
  };

  // Ou podemos fazer dessa forma

  changePage = () => {
    this.state.currentPage === "createUserForm"
      ? this.setState({ currentPage: "userListPage" })
      : this.setState({ currentPage: "createUserForm" });
  };

  // changePage = () => {
  //   if(this.state.currentPage === "createUserForm"){
  //     this.setState({currentPage:"userListPage"});
  //   }else{  
  //     this.setState({currentPage:"createUseForm"});
  //   }
  // };

  render() {
    const currentPage = () => {
      if (this.state.currentPage === "createUserForm") {
        return <CreateUserForm />;
      } else if (this.state.currentPage === "userListPage") {
        return <UserListPage />;
      }
    };

    return (
      <AppContainer>
        {currentPage()}
        <BotaoTrocar onClick={this.changePage}>Trocar de página</BotaoTrocar>
        {this.state.currentPage === "createUserForm" ? <CreateUserForme /> : <CreateUserForme />}
      </AppContainer>
    );
  }

   
}
export default App;




