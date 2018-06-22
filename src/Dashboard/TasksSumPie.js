import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

export default class KPI extends Component {
    constructor(props) {
        super(props);
        this.state = {kpi: ''};
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({kpi: e.target.value});
    }

    render() {
        let data = [12, 19, 3];
        let chartData = {
            labels: ["Done on time", "Need to be done", "Done after due date"],
            datasets: [{
                label: 'Task completion tracker',
                data: data,
                backgroundColor: [
                    'rgba(78, 205, 196, 0.6)',
                    'rgba(255, 93, 115, 0.6)',
                    'rgba(177, 179, 181, 0.6)'
                ],
                borderColor: [
                    'rgba(78, 205, 196, 1)',
                    'rgba(255, 93, 115, 1)',
                    'rgba(177, 179, 181, 1)',
                ],
                hoverBackgroundColor: [
                    'rgba(78, 205, 196, 0.9)',
                    'rgba(255, 93, 115, 0.9)',
                    'rgba(177, 179, 181, 0.9)',
                ],
                borderWidth: 1,

            }]
        };

        let options = {
            cutoutPercentage: 0,
            maintainAspectRatio: false
        };
        return (
            <div className="col-md-12">
                <h3>Task Completion Tracker:</h3>
                <div>
                    <Doughnut
                        data={chartData}
                        options={options}
                        height={250}

                    />
                </div>
            </div>
        );
    }
}