import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

import {parseToMoment} from '../services';
import {getWithOpacity} from '../app_components';
import {DashboardContainer} from './dashboard_components';

export default class TasksTimeLine extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {data: this.props.data};
  }

  componentWillReceiveProps({data}) {
    this.setState({data});
  }

  calculateData() {
    const tasksList = this.state.data;
    let createdObject = {};
    let completionObject = {};
    let month;
    for (let i = 0; i < tasksList.length; i++) {
      month = parseToMoment(tasksList[i].creationDate).format('MM/YYYY');
      if (createdObject[month] >= 1) createdObject[month]++;
      else createdObject[month] = 1;
      if (!completionObject[month] >= 1) completionObject[month] = 0;
      if (tasksList[i].completionDate) {
        month = parseToMoment(tasksList[i].completionDate).format('MM/YYYY');
        if (completionObject[month] >= 1) completionObject[month]++;
        else completionObject[month] = 1;
      }
    }
    return [createdObject, completionObject];
  }

  getColors(color) {
    let arr = [];
    arr[0] = getWithOpacity(color, 0.7);
    arr[1] = getWithOpacity(color, 1);
    arr[2] = getWithOpacity(color, 0.3);
    return arr;
  }

  render() {
    let data = this.calculateData();
    console.log(data);
    let createdTasks = [];
    let complitedTasks = [];
    createdTasks[0] = Object.keys(data[0]);
    createdTasks[1] = Object.values(data[0]);
    complitedTasks[0] = Object.keys(data[1]);
    complitedTasks[1] = Object.values(data[1]);

    let createdColoring = this.getColors('primaryColor');
    let completedColoring = this.getColors('tertiaryColor');
    let chartData = {
      labels: createdTasks[0],
      datasets: [
        {
          label: 'Created',
          data: createdTasks[1],
          backgroundColor: completedColoring[0],
          borderColor: completedColoring[1],
          hoverBackgroundColor: completedColoring[2],
          borderWidth: 3,
        },
        {
          label: 'Complited',
          data: complitedTasks[1],
          backgroundColor: createdColoring[0],
          borderColor: createdColoring[1],
          hoverBackgroundColor: createdColoring[2],
          borderWidth: 3,
        },
      ],
    };
    let options = {maintainAspectRatio: false};
    return (
      <DashboardContainer fontSize={5}>
        <h1> Tasks Tracker:</h1>
        <div>
          <Bar data={chartData} options={options} height={250} />
        </div>
      </DashboardContainer>
    );
  }
}
