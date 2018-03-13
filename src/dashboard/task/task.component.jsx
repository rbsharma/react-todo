import React, { Component } from 'react';
import './task.component.css';

class TaskComponent extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((task, index) =>
                        <div className="task-item" key={task.id}>
                            <span>{task.description}</span>
                            <i title="Mark/Unmark Completed"></i>
                        </div>
                    )
                }
            </div>
        )
    };
}

export default TaskComponent;