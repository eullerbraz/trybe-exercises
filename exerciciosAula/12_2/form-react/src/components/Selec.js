import React from 'react';

class Select extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <select name="selectValue" value={value} onChange={handleChange}>
      <option>Teste1</option>
      <option>Teste2</option>
    </select>
    );
  }
};

export default Select;
