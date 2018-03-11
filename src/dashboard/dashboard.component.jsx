import React, {Component} from 'react';
import Task from './task/task.component';

class DashboardComponent extends Component{
    render(){
        return(
            <div>
                TASK LIST : 
                <Task />
            </div>
        );
    }    
}

export default DashboardComponent;