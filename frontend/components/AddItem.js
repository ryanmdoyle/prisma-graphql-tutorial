import React, { Component } from 'react';

class AddItem extends Component {
  render() {
    state = {
      name: '',
      cost: '',
      shortDescription: '',
      longDescription: '',
    };

    saveToState = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    return (
      <form method='POST' onSubmit=''>
        <label htmlFor='name'>
          Name
              <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='email'>
          Cost
              <input
            type='text'
            name='Cost'
            value={this.state.cost}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='shortDescription'>
          Short Description
              <input
            type='text'
            name='shortDescription'
            value={this.state.shortDescription}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='longDescription'>
          Long Description
              <input
            type='text'
            name='longDescription'
            value={this.state.longDescription}
            onChange={this.saveToState}
          />
        </label>
        <input type='submit' />
      </form>
    );
  }
}
export default AddItem;