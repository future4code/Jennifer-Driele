import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  margin-top:10px;
  margin-bottom:10px;
`;

const List = styled.div`
   width: 40vw;
  height: 17vh;
  box-shadow: 5px 5px 5px 5px blue;
  font-size: 15px;
  background-color: #6699ff;
  border-style: groove 5px solid blue;
`;

class App extends React.Component {
  state = {
    history: []
  };

  getHistory = () => {
    axios
      .get("https://api.spacexdata.com/v3/history")
      .then((resposta) => {
        this.setState({ history: resposta.data });
      })
      .catch((erro) => {});
  };

  componentDidMount() {
    this.getHistory();
  }

  render() {
    return (
      <Container>
        {this.state.history.map((item) => {
          return (
            <List>
              <h2 key={item.id}>{item.title} </h2>
              {item.event_date_utc}
              <br />
              <a href={item.links.wikipedia}>Link</a>
            </List>
          );
        })}
      </Container>
    );
  }
}
export default App;