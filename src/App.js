import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cvJSON: "",
    };
  }

  generateDocx = (e) => {
    e.preventDefault();
    console.log('THIS IS JSON', this.state.cvJSON);
  };

  onTextareaChange = (event) => {
    this.setState({
      cvJSON: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><code>json</code> to <code>docx</code></h1>
        </header>
        <p className="App-intro">
          Paste <code>json</code> here:.
        </p>
        <form onSubmit={this.generateDocx} style={{ width: '480px', margin: '0 auto' }}>
          <textarea
            name="cv"
            id="cv"
            onChange={this.onTextareaChange}
            style={{ width: '480px', height: '240px'}}
          />
          <button
            style={{ display: 'block' }}
            type="submit"
          >
            Generate .docx
          </button>
        </form>
      </div>
    );
  }
}

export default App;
