import React, { Component } from "react";
import PropTypes from "prop-types";
class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) =>{
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type='text'
          name='title'
          placeholder='Add todo...'
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='submit'
          className='btn'
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default AddTodo;
