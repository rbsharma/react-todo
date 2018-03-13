import React, { Component } from 'react';
import Tasks from './task/task.component';
import AddTask from "./add-task/add-task.component";

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    AddNewTask(newTaskText) {
        let newTask = { id: this.state.tasks.length, description: newTaskText, completed: false };
        let _tasks = this.state.tasks;
        _tasks.push(newTask);

        this.setState({
            tasks: _tasks
        });
    }

    ToggleTaskCompletion(_clickedTask) {
        let _tasks = this.state.tasks;
        for (let i = 0; i < _tasks.length; i++) {
            if (_tasks[i].id == _clickedTask.id) {
                _tasks[i].completed = !_tasks[i].completed;
                break;
            }
        }

        this.setState({
            tasks: _tasks
        });
    }

    render() {
        return (
            <div className="centerAlign">
                <div className="offset-sm-1 col-sm-10 offset-md-4 col-md-8">
                    <AddTask
                        GetNewTaskObject={this.AddNewTask.bind(this)} />
                </div>
                <div>
                    {<Tasks
                        GetClickedTask={this.ToggleTaskCompletion.bind(this)}
                        items={this.state.tasks} />}
                </div>
            </div>
        );
    }
}

export default DashboardComponent;