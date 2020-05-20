import validator from 'validator';

class FormValidator{

    constructor(validacao) {
        this.validacao = validacao;
    }
    
    valida(state){
        console.log('validado');
        return false;
    }

}

export default FormValidator;