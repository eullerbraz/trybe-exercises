import React from 'react';

class ProfissionalFieldset extends React.Component {
  render() {
    const { handlerChange, handlerEnter } = this.props;
    return (
      <fieldset className='container'>
        <label htmlFor='resumo'>Resumo do Currículo: 
        <textarea id='resumo' name='resumo' maxLength='1000' onChange={handlerChange} required/>
        </label>

        <label htmlFor='cargo'>Cargo: 
        <textarea id='cargo' name='cargo' maxLength='40' onChange={handlerChange} required/>
        </label>

        <label htmlFor='descricao'>Descrição do Cargo: 
        <input type='text'
        id='descricao'
        name='descicao'
        maxLength='500'
        onChange={handlerChange}
        onMouseEnter={handlerEnter}
        required/>
        </label>
      </fieldset>
    );
  }
}

export default ProfissionalFieldset;