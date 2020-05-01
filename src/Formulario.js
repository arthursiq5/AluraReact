import React, { Component } from 'react'

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.stateInicial;
    }

    render() {
        return (
            <form>

                <label for="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                />

                <label for="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                />


                <label for="preco">Preço</label>
                <input
                    id="preco"
                    type="text"
                    name="preco"
                />


                <button type="button">Salvar
                </button>
            </form>

        )

    }
}

export default Formulario;