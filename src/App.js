import React, { Component } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state={
    noticias:[]
  }

  async componentDidMount(){
    
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria ='general')=>{
    const url =`https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=ce3e7a3748c94ade98d4d33bf4f5f56b`

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({
      noticias : noticias.articles
    })
  }
  render() {
    return (
      <div>
        <Header titulo='Noticias React API'/>
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias}/>
          <ListaNoticias noticias={this.state.noticias}/>
        </div>
      </div>
    );
  }
}

export default App;
