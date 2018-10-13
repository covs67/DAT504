import React, { Component } from 'react';

function validateInput(Input) {
  let error = ''
  if (Input.length < 1) {
    error = 'Add some more text please';
  }
  return error;
}

class inputField extends Component {
  state = {
    input: '',
    error: '',
    list: []
  }

  clearInput = () => {
    this.setState({
      input: ''
    })
  }

  onChange = (event) => {
    console.log(event)
    this.setState({
      input: event.target.value,
      error: validateInput(event.target.value),
    })
  }

  addToList = () => {
    this.setState ({
      list: [...this.state.list, this.state.input],


    })
  }

  render() {
    const data = [this.addToList];
    const listItems = data.map((d) => <ul><li key={d.addToList}>{d.addToList}</li></ul>);
    console.log('the list', this.state.list)
    return (
      <div>
        <p>Input: {this.state.input}</p>

        <input type='text' onChange={this.onChange} value={this.state.input} placeholder="Input"/>
        <button type='submit' className="texy" onClick={this.addToList}>Save To List</button>
        {listItems}
      </div>
    )
  }
}

export default inputField;
