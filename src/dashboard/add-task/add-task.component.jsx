import React, { Component } from 'react';
import './add-task.component.css';

class AddTaskComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { newTaskText: '' };
    }

    newTaskTextChanged(_newTaskText) {
        this.setState({
            newTaskText: _newTaskText
        });
    }

    AddNewTask(event){
        event.preventDefault();
        if(!this.state.newTaskText){
            return false;
        }
        this.props.GetNewTaskObject(this.state.newTaskText);
    }

    render() {
        return (
            <form onSubmit={this.AddNewTask.bind(this)}>
                <div>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control col-md-6"
                            ref={this.state.newTaskText}
                            onChange={(e) => this.newTaskTextChanged(e.target.value)}
                            placeholder="Add Description Component" />

                        <span className="input-group-btn">
                            <button
                                onClick={this.AddNewTask.bind(this)}
                                className="btn btn-primary border-radius-0"
                                type="button">
                                <i className="fa fa-plus">+</i>
                            </button>
                        </span>
                    </div>
                </div>
            </form>
        )
    };
}

export default AddTaskComponent;