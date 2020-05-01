import React, { Component } from 'react';

class Tabela extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Autores</th>
                        <th>Livros</th>
                        <th>Preços</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Paulo</td>
                        <td>React</td>
                        <td>1000</td>
                        <td><button>Remover</button></td>
                    </tr>
                    <tr>
                        <td>Nico</td>
                        <td>React</td>
                        <td>1000</td>
                        <td><button>Remover</button></td>
                    </tr>
                    <tr>
                        <td>Daniel</td>
                        <td>React</td>
                        <td>1000</td>
                        <td><button>Remover</button></td>
                    </tr>
                </tbody>
            </table>

        );
    }

}

export default Tabela;