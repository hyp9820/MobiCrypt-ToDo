import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTasks, deleteTask, colorTask, impTask } from "../../actions/tasks";

export class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    colorTask: PropTypes.func.isRequired,
    impTask: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTasks();
  };


  // Change (task) {
  //   const isdone = task.isdone;
  //   if(isdone){
  //     return (<button 
  //       className="btn btn-success btn-sm" 
  //       onClick={this.props.colorTask.bind(this, task)}
  //     >
  //       Done!
  //     </button>)
  //   }
  //   return(<button 
  //             className="btn btn-danger btn-sm" 
  //             onClick={this.props.colorTask.bind(this, task)}
  //           >
  //             NOT Done
  //           </button>)
    
  // };

  render() {

    return (
      <Fragment>
        <h2>Tasks</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              {/* <th>Name</th>
              <th>Email</th> */}
              <th>Title</th>
              <th>Description</th>
              <th>Done</th>
              <th>Important</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.props.tasks.map(task => (              
              <tr key={task.id} >
                <td>{task.id}</td>
                {/* <td>{task.name}</td>
                <td>{task.email}</td> */}
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>

                    { task.isdone ?
                    <button
                      className="btn btn-success btn-sm" 
                      onClick={this.props.colorTask.bind(this, task)}
                    >
                      Done!
                    </button>
                    :
                    <button 
                      className="btn btn-secondary btn-sm" 
                      onClick={this.props.colorTask.bind(this, task)}
                    >
                      Not Done
                    </button>
                    }

                </td>
                <td>
                    { task.isimp ?
                    <button
                      className="btn btn-warning btn-sm" 
                      onClick={this.props.impTask.bind(this, task)}
                    >
                      Important!
                    </button>
                    :
                    <button 
                      className="btn btn-secondary btn-sm" 
                      onClick={this.props.impTask.bind(this, task)}
                    >
                      Casual
                    </button>
                    }

                </td>
                <td>
                  <button 
                    className="btn btn-danger btn-sm" 
                    onClick={this.props.deleteTask.bind(this, task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(mapStateToProps, { getTasks, deleteTask, colorTask, impTask})(Tasks);
