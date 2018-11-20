import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
        name: "",
        email: "",
        message: ""
      });
      this.props.onChange({
        name: "",
        email: "",
        message: ""
      });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email address"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <input
          type='text'
          name="message"
          required
          placeholder="Your message"
          value={this.state.message}
          onChange={e => this.change(e)}
        />

        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
