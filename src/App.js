import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';



const API_KEY = `19183597-d96d4fd70ee21b90f4a7ebf53`
const RESULTS_COUNT = 30


class App extends Component{
  state = {
    termino : '',
    imagenes : [],
    pagina : ''
}

scroll = () => {
  const elemento = document.querySelector('.jumbotron');
  elemento.scrollIntoView('smooth', 'start')
}

paginaAnterior = () => {
  let pagina = this.state.pagina
  if(pagina === 1) return null
  pagina = pagina - 1
  this.setState({
    pagina
  }, () => {
    this.consultarApi()
    this.scroll()
  })
}
paginaSiguiente = () => {
  let pagina = this.state.pagina
  pagina = pagina + 1
  this.setState({
    pagina
  }, () => {
    this.consultarApi()
    this.scroll()
  })
}


consultarApi = () => {
  const {termino, pagina} = this.state
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${termino}&per_page=${RESULTS_COUNT}&page=${pagina}`
  fetch(url)
  .then(response => response.json())
  .then(resultado => this.setState({imagenes : resultado.hits}))
}

datosBusqueda = (termino) => {
  this.setState({
    termino : termino,
    pagina : 1
  }, () => {
    this.consultarApi()
  })
}

render(){
  return(
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Buscador
          datosBusqueda={this.datosBusqueda}
        />
      </div>
        <div className="row justify-content-center">
        <Resultado
          imagenes = {this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
        />
        </div>
    </div>
    )
  }
}
export default App
