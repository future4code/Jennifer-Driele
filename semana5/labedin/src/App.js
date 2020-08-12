import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './img/dri.jpg'
import email from './img/email.png'
import endereco from './img/placeholder.png'
import facebook from './img/facebook.png'
import rede from './img/twitter.png'
import labenu from './img/labenu.png'





function App() {   
  return (
    <div className="App">
      <div className="page-section-container">
      <h2>Dados pessoais</h2>
        <CardGrande
          imagem ={foto}
          nome="Jennifer Silva" 
          descricao="Oi, eu sou a Jennifer. Sou  estudante Full Stack da Labenu. Sou apaixonada por programação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
         imagem={email}
         text="nasabella75dr@gmail.com.br  /  nasaespacial@gmail.com  / nasa@gmail.com"
         
          />
          
        <CardPequeno
          imagem={endereco}
          descricao="Avenida dos Cardeais ,287 , Parque chapadão , Piracicaba - Sao Paulo" 
          />
        </div>
        

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={labenu}
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Missão de ser pioneira no futuro na exploração espacial, descoberta científica e pesquisa aeronáutica." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={facebook}
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem={rede}
          texto="Twitter" 
        />        
      </div>
    </div>
    
  );
}

export default App;
