import './App.css';
import React from 'react';
import Select from './components/Selec';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectValue: 'Teste1',
      numValue: 0,
      textValue: '',
      textAreaValue: '',
      checkValue: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="App">
        <Select value={this.state.selectValue} handleChange={this.handleChange}/>
        <input type='text' name="textValue" value={this.state.textValue} onChange={this.handleChange}  />
        <input type='number' name="numValue" value={this.state.numValue} onChange={this.handleChange}  />
        <textarea name="textAreaValue" value={this.state.textAreaValue} onChange={this.handleChange} />
        <input type='checkbox' name="checkValue" value={this.state.checkValue} onChange={this.handleChange}  />
        <input type='checkbox' name="checkValue" value={this.state.checkValue} onChange={this.handleChange}  />
        <input type='file' />
      </div>
    );
  }
}

export default App;
