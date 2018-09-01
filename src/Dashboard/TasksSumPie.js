import React, {Component} from 'react'; import {Doughnut} from
'react-chartjs-2'; import {parseToMoment} from '../services';

export default class TasksSumPie extends Component { constructor(props) {
  super(props); this.state = {data: this.props.data}; }

    componentWillReceiveProps({data}) { this.setState({data});

    }

    countInfo() { const {data} = this.state; let count = []; count[0] = 0; //
      on time count[1] = 0; // after due date for (let i = 0; i < data.length;
      i++) { if (!data[i].isNotCompleted) { let completionDate =
          parseToMoment(data[i].completionDate); let dueDate =
          parseToMoment(data[i].dueDate); if (completionDate.isBefore(dueDate))
          count[0]++;

                else count[1]++;

            } } return count; }

    render() { const {data} = this.props; const tasksDone = this.countInfo();
      let tasksData = [tasksDone[0], data.length - tasksDone[0] - tasksDone[1],
        tasksDone[1]]; let chartData = { labels: ["Done on time", "Need to be
          done", "Done after due date"], datasets: [{ label: 'Task completion
          tracker', data: tasksData, backgroundColor: [ 'rgba(78, 205, 196,
          0.6)', 'rgba(255, 93, 115, 0.6)', 'rgba(177, 179, 181, 0.6)' ],
          borderColor: [ 'rgba(78, 205, 196, 1)', 'rgba(255, 93, 115, 1)',
          'rgba(177, 179, 181, 1)', ], hoverBackgroundColor: [ 'rgba(78, 205,
          196, 0.9)', 'rgba(255, 93, 115, 0.9)', 'rgba(177, 179, 181, 0.9)', ],
          borderWidth: 1,

            }] };

        let options = { cutoutPercentage: 0, maintainAspectRatio: false };
  return ( <div className="col-md-12"> <h3>Task Completion Tracker:</h3> <div>
    <Doughnut data={chartData} options={options} height={250} /> </div>
    </div>); } }
