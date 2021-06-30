import React from 'react';
import PersonalFieldset from './PersonalFieldset';
import ProfissionalFieldset from './ProfissionalFieldset';
import Info from './Info';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      casaTipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      alertCount: 0,
    }
  }

  validarEndereco = endereco => endereco.replace(/[^\w\s]/gi, '');

  handlerChange = (event) => {
    let { name, value } = event.target;
    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereco') value = this.validarEndereco(value);
    event.target.value = value;
    this.setState(() => ({
      [name]: value,
    }))
  }

  handlerBlur = (event) => {
    let { name, value } = event.target;
    if (name === 'cidade') value = value.match(/^\d/) ? '' : value;
    event.target.value = value;
    this.setState({ [name]: value })
  }

  handlerMouseEnter = () => {
    if (this.state.alertCount === 0) {
      alert('Preencha com cuidado esta informação.');
    }
    this.setState((anterior) => ({ alertCount: anterior.alertCount + 1 }));
  }

  limpar = () => { 
    this.setState({
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    casaTipo: '',
    resumo: '',
    cargo: '',
    descricao: '',
    alertCount: 0,
    submetido: false,
  })
};

  enviar = () => { this.setState({ submetido: true }) };

  render() {
    const { submetido } = this.state;
    return (
      <form>
        <PersonalFieldset handlerChange={this.handlerChange} handlerBlur={this.handlerBlur}/>

        <ProfissionalFieldset handlerChange={this.handlerChange} handlerEnter={this.handlerMouseEnter}/>

        <input
            type="button"
            onClick={ this.enviar }
            value="Enviar"
        />

        <input
          type="reset"
          onClick={ this.limpar }
          value="Limpar"
        />

        { submetido && <Info estadoAtual={ this.state } /> }

      </form>
    );
  }
};

export default Form;