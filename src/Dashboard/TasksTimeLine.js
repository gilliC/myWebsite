import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

export default class TasksTimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data};
  }

  componentWillReceiveProps({data}) {
    this.setState({data});
  }

  calculateData() {
    const tasksList = this.state.data;
    let arr = {};
    for (let i = 0; i < tasksList.length; i++) {
      if (arr[tasksList[i].dueDate] >= 1) arr[tasksList[i].dueDate]++;
      else arr[tasksList[i].dueDate] = 1;
    }
    return arr;
  }

  render() {
    let data = this.calculateData();
    let tasksDates = Object.keys(data);
    let tasksCompleted = Object.values(data);

    // let tasksCompleted = [1, 1, 2, 5, 2, 1, 3];
    let tasksLeftToDo = [0, 2, 1, 2, 3, 2, 3];

    let chartData = {
      labels: tasksDates,
      datasets: [
        {
          label: 'The amount of tasks completed',
          data: tasksCompleted,
          backgroundColor: 'rgba(94,130,188, 0.2)',
          borderColor: 'rgba(94,130,188, 1)',
          hoverBackgroundColor: 'rgba(94,130,188, 0.7)',
          borderWidth: 1,
        },
        {
          label: 'The amount of tasks left to do',
          data: tasksLeftToDo,
          backgroundColor: 'rgba(193,110,175, 0.2)',
          borderColor: 'rgba(193,110,175, 1)',
          hoverBackgroundColor: 'rgba(193,110,175, 0.7)',
          borderWidth: 1,
        },
      ],
    };
    let options = {maintainAspectRatio: false};
    return (
      <div className="col-md-12">
        {' '}
        <h3>Tasks Tracker:</h3>{' '}
        <div>
          {' '}
          <Bar data={chartData} options={options} height={250} />{' '}
        </div>{' '}
      </div>
    );
  }
}
