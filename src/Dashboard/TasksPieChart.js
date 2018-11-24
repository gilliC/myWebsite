import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {parseToMoment} from '../services';

import {getWithOpacity} from '../app_components';
import {DashboardContainer} from './dashboard_components';
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
  colorsWithOpacity(opacity) {
    let array = [];
    array[0] = getWithOpacity('primaryColor', opacity);
    array[1] = getWithOpacity('tertiaryColor', opacity);
    array[2] = getWithOpacity('(67,124,144)', opacity);
    return array;
  }

  render() {
    let backgroundColors = this.colorsWithOpacity(0.6);
    let borderColors = this.colorsWithOpacity(1);
    let hoverBackgroundColors = this.colorsWithOpacity(0.9);
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
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          hoverBackgroundColor: hoverBackgroundColors,
          borderWidth: 3,
        },
      ],
    };

    let options = {cutoutPercentage: 0, maintainAspectRatio: false};
    return (
      <DashboardContainer fontSize={5}>
        <h1>Task Completion Tracker:</h1>
        <div>
          <Doughnut data={chartData} options={options} height={250} />
        </div>
      </DashboardContainer>
    );
  }
}
