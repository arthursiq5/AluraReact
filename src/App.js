/* pacotes externos */
import React, { Component, Fragment } from 'react';

/* arquivos de estilo */
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'

/* componentes do projeto */
import Tabela from './Tabela';
import Formulario from './Formulario';
import Header from './Header';


class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Nico',
        livro: 'Java',
        preco: '9999'
      }
    ],
  };

  removeAutor = index => {
    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      }
    );
  } 

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor]})
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do Código</h1>
          <Tabela autores={ this.state.autores } removeAutor={ this.removeAutor } />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
