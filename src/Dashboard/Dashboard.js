import React, {Component} from 'react';

import fire from '../fire';

import TasksPieChart from './TasksSumPie';
import TasksTimeLineChart from './TasksTimeLine';
import KPIList from './KPIList';

import Carousel from '../components/Carousel/Carousel';

import './Dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    let tasksRef = fire
      .database()
      .ref('tasks')
      .orderByKey()
      .limitToLast(100);
    //re-renders each time I get a snapshot, can it be smarter?
    tasksRef.on('child_added', snapshot => {
      let item = snapshot.val();
      let task = {
        title: item.title,
        isNotCompleted: item.isNotCompleted,
        id: snapshot.key,
        dueDate: item.dueDate,
        completionDate: item.completionDate,
      };
      this.setState({data: [task].concat(this.state.data)});
    });
    tasksRef.on('child_removed', snapshot => {
      console.log(
        "The blog post titled '" + snapshot.key + "' has been deleted",
      );
      let data = this.state.data;
      data = data.filter(task => {
        return task.id !== snapshot.key;
      });
      this.setState({data});
    });
    tasksRef.on('child_changed', snapshot => {
      let item = snapshot.val();
      item.id = snapshot.key;
      let i = this.state.data.findIndex(obj => obj.id === item.id);
      let data = this.state.data;
      data[i] = item;
      this.setState({data});
    });
  }
  render() {
    return (
      <div>
        <div className="col-md-8">
          <Carousel>
            <TasksPieChart className="fullsize" data={this.state.data} />
            <TasksTimeLineChart className="fullsize" data={this.state.data} />
          </Carousel>
        </div>
        <div className="col-md-4">
          <KPIList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
