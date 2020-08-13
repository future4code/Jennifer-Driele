import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Jennifer'}
          fotoUsuario={'https://picsum.photos/id/237/536/354'}
          fotoPost={'https://picsum.photos/536/354'}
        />
        <Post
          nomeUsuario={'Jessica'}
          fotoUsuario={'https://picsum.photos/536/354'}
          fotoPost={'https://static.quizur.com/i/b/5938920aed54e4.553405975938920add9cb5.73640593.jpg'}
        />
      </div>
    );
  }
}

export default App;
