import React, { Component } from 'react'
import FormValidator from './FormValidator';

class Formulario extends Component {

    constructor(props) {
        super(props);

        
        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{ min: 0, max: 99999 }],
                validoQuando: true,
                mensagem: 'Entre com um valor numérico'
            }
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido(),
        }
        
        this.state = this.stateInicial;
    }
    
    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        if(this.validador.valida(this.state)){
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        }else{
            console.log('submit bloqueado');
        }
    }

    render() {
        const { nome, livro, preco } = this.state;
        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                    <label className="input-field" htmlFor="nome">Nome</label>
                    <input
                        className="validate"
                        id="nome"
                        type="text"
                        name="nome"
                        value={ nome }
                        onChange={ this.escutadorDeInput }
                        />
                    </div>
                    
                    <div className="input-field col s4">
                    <label className="input-field" htmlFor="livro">Livro</label>
                    <input
                        className="validate"
                        id="livro"
                        type="text"
                        name="livro"
                        value={ livro }
                        onChange={ this.escutadorDeInput }
                        />
                    </div>

                    <div className="input-field col s4">
                    <label className="input-field" htmlFor="preco">Preço</label>
                    <input
                        className="validate"
                        id="preco"
                        type="text"
                        name="preco"
                        value={ preco }
                        onChange={ this.escutadorDeInput }
                        />
                    </div>
                    <button onClick={this.submitFormulario} type="button" className="waves-effect waves-light btn indigo lighten-2">Salvar
                    </button>
                </div>
            </form>

        )

    }
}

export default Formulario;