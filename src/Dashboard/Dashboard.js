import React, {Component} from 'react';

import AnimatedWrapper from '../components/AnimatedWrapper';

import TasksPieChart from './TasksSumPie';
import TasksTimeLineChart from './TasksTimeLine';
import AddingKPI from './AddingKPI';
import KPIList from './KPIList';

import './DashBoardStyle.css';

class DashboardComponent extends Component {
    render() {
        return (
            <div className="bla">
                <div className="col-md-4">
                    <TasksPieChart/>
                    <TasksTimeLineChart/>
                </div>
                <div className="col-md-8">
                    <AddingKPI/>
                    <KPIList/>
                </div>

            </div>
        );
    }
}

const Dashboard = AnimatedWrapper(DashboardComponent);
export default Dashboard;
