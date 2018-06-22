import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

export default class TasksTimeLine extends Component {

    render() {
        let tasksCompleted = [1, 1, 2, 5, 2, 1, 3];
        let tasksLeftToDo =  [0, 2, 1, 2, 3, 2, 3];

        let chartData = {
            labels: ["22/06", "23/06", "24/06","25/06","26/06","27/06","28/06"],
            datasets: [{
                label: 'The amount of tasks completed',
                data: tasksCompleted,
                backgroundColor: 'rgba(78, 205, 196, 0.2)',
                borderColor: 'rgba(78, 205, 196, 1)',
                hoverBackgroundColor: 'rgba(78, 205, 196, 0.7)',
                borderWidth: 1,

            },
                {
                    label: 'The amount of tasks left to do',
                    data:tasksLeftToDo ,
                    backgroundColor: 'rgba(255, 93, 115, 0.2)',
                    borderColor: 'rgba(255, 93, 115, 1)',
                    hoverBackgroundColor: 'rgba(255, 93, 115, 0.7)',
                    borderWidth: 1,

                }]
        };
        let options = {
            maintainAspectRatio: false,
        };
        return (
            <div className="col-md-12">
                <h3>Tasks Tracker:</h3>
                <div >
                    <Bar
                        data={chartData}
                        options={options}
                        height={250}

                    />
                </div>
            </div>
        );
    }
}