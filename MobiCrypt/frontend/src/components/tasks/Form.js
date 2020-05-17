import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addTask } from '../../actions/tasks'


export class Form extends Component {
  
  state = {
    title: "",
    description: "",
  }

  static propTypes = {
    addTask: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]:e.target.value });

  onSubmit = e => {
    e.preventDefault();
    // const {name, email, title, description} = this.state;
    // const task = {name, email, title, description};
    const {title, description} = this.state;
    const task = {title, description, isdone:false, isimp:false}; 
    this.props.addTask(task);
    this.setState({
      title: "",
      description: "",
    })
  };

  render() {
    const { name, email, title, description} = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add New Tasks</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" name="title" onChange={this.onChange} value={title}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" type="text" name="description" onChange={this.onChange} value={description}/>
          </div>
          <div className="form-group">
              <button className="btn btn-primary" type="submit">Add!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTask })(Form);
