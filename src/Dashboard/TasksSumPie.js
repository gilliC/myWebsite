import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {parseToMoment} from '../services';

export default class TasksSumPie extends Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data};
  }

  componentWillReceiveProps({data}) {
    this.setState({data});
  }

  countInfo() {
    const {data} = this.state;
    let count = [];
    count[0] = 0; //  on time
    count[1] = 0; // after due date
    for (let i = 0; i < data.length; i++) {
      if (!data[i].isNotCompleted) {
        let completionDate = parseToMoment(data[i].completionDate);
        let dueDate = parseToMoment(data[i].dueDate);
        if (completionDate.isBefore(dueDate)) count[0]++;
        else count[1]++;
      }
    }
    return count;
  }

  render() {
    const {data} = this.props;
    const tasksDone = this.countInfo();
    let tasksData = [
      tasksDone[0],
      data.length - tasksDone[0] - tasksDone[1],
      tasksDone[1],
    ];
    let chartData = {
      labels: ['Done on time', 'Need to be done', 'Done after due date'],
      datasets: [
        {
          label: 'Task completion tracker',
          data: tasksData,
          backgroundColor: [
            'rgba(94,130,188,0.6)',
            'rgba(193,110,175, 0.6)',
            'rgba(67,124,144, 0.6)',
          ],
          borderColor: [
            'rgba(94,130,188, 1)',
            'rgba(193,110,175, 1)',
            'rgba(67,124,144, 1)',
          ],
          hoverBackgroundColor: [
            'rgba(94,130,188, 0.9)',
            'rgba(193,110,175, 0.9)',
            'rgba(67,124,144, 0.9)',
          ],
          borderWidth: 3,
        },
      ],
    };

    let options = {cutoutPercentage: 0, maintainAspectRatio: false};
    return (
      <div className="col-md-12">
        <h3 className="kpi-title">Task Completion Tracker:</h3>
        <div>
          <Doughnut data={chartData} options={options} height={250} />
        </div>
      </div>
    );
  }
}
