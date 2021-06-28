import React from 'react';
const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ', 'RN', 'RS', 'SC', 'SP', 'SE', 'TO'];

class PersonalFieldset extends React.Component {
  render() {
    const { handlerChange, handlerBlur } = this.props;
    return (
      <fieldset className='container'>
        <label htmlFor='nome'>Nome: 
          <input type='text' id='nome' name='nome' maxLength='40' onChange= {handlerChange} required/>
        </label>

        <label htmlFor='email'>Email: 
          <input type='text' id='email' name='email' maxLength='50' onChange= {handlerChange} required/>
        </label>

        <label htmlFor='cpf'>CPF: 
          <input type='text' id='cpf' name='cpf' maxLength='11' onChange= {handlerChange} required/>
        </label>

        <label htmlFor='endereco'>Endereço: 
          <input type='text' id='endereco' name='endereco' maxLength='200' onChange= {handlerChange} required/>
        </label>

        <label htmlFor='cidade'>Cidade: 
          <input type='text' id='cidade' name='cidade' maxLength='28' onBlur={handlerBlur} onChange= {handlerChange} required/>
        </label>

        <select name='estado' onChange= {handlerChange} required>Estado:
          <option>Selecionar</option>
          {states.map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>

        <label htmlFor='casa'>
          <input type='radio' id='casa' name='casaTipo' value='Casa' onChange= {handlerChange} required/>Casa
        </label>
        <label htmlFor='apartamento'>
          <input type='radio' id='apartamento' name='casaTipo' value='Apartamento' onChange= {handlerChange} required/>Apartamento
        </label>

      </fieldset>
    );
  }
}

export default PersonalFieldset;