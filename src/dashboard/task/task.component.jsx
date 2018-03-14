import React, { Component } from 'react';
import './task.component.css';

class TaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    ToggleCompletion(_clickedTask) {
        this.props.GetClickedTask(_clickedTask);
    }

    DeleteTask(_clickedTask) {
        this.props.GetTaskToDelete(_clickedTask);
    }

    render() {
        return (
            <div>
                {
                    this.props.items.map((task, index) =>
                        <div
                            onClick={() => this.ToggleCompletion(task)}
                            className={"task-item " + (task.completed ? 'task-completed' : 'task-active')}
                            key={task.id}>
                            <span className="task-description">{task.description}</span>
                            <input
                                onClick={() => this.DeleteTask(task)}
                                title="Delete" type="button"
                                className="btn btn-danger float-right" value="-" />
                        </div>
                    )
                }
            </div>
        )
    };
}

export default TaskComponent;