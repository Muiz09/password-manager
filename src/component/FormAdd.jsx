import React, { Component } from 'react';

class FormAdd extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      provider: 'Work',
    };
  }
  
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Formulir:', this.state);
  }
  
  render() {
    return (
      <div>
        <h2>Formulir React</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="provider">Provider:</label>
            <select
              id="provider"
              name="provider"
              value={this.state.provider}
              onChange={this.handleChange}
            >
              <option value="Work">Work</option>
              <option value="Family">Family</option>
              <option value="Personal">Personal</option>
            </select>
          </div>

          <button type="submit">Kirim</button>
        </form>
      </div>
    );
  }
}

export default FormAdd;
