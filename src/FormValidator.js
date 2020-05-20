import validator from 'validator';

class FormValidator{

    constructor(validacoes) {
        this.validacoes = validacoes;
    }
    
    valida(state) {
        let validacao = this.valido();

        this.validacoes.forEach(regra => {
            const campoValor = state[this.validacao.campo.toString()];
            const metodoValidacao = validador[this.validacao.metodo];

            if (metodoValidacao(campoValor, [], state) === true) {
                console.log("FORM INVÁLIDO");
                return false;
            } else {
                console.log("FORM VÁLIDO");
                return true;
            }
        });
    }

}

export default FormValidator;