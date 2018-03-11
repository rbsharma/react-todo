import React from 'react';
import { Link, IndexLink } from 'react-router';
import Dashboard from './dashboard/dashboard.component';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Dashboard />
            </div>
        );
    };
}

export default App;
