import React, {Component} from 'react';

import AnimatedWrapper from '../components/AnimatedWrapper';
import body1 from './body1';


import './DashBoardStyle.css';

class DashboardComponent extends Component {
    render() {
        return (
            <div>
                <h1>DASHBOARD</h1>
            </div>
        );
    }
}
const Dashboard = AnimatedWrapper(DashboardComponent);
export default Dashboard;
