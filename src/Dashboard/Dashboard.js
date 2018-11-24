import React, {Component} from 'react';
import fire from '../fire';

import TasksPieChart from './TasksPieChart';
import TasksTimeLineChart from './TasksTimeLine';
import KPIList from './KPIList';
import Carousel from '../components/Carousel';

import {ColinRow, ContainerRow} from '../components/common_components';

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
    ///////////// ADDED //////////////
    tasksRef.on('child_added', snapshot => {
      let item = snapshot.val();
      let task = {
        title: item.title,
        isNotCompleted: item.isNotCompleted,
        id: snapshot.key,
        dueDate: item.dueDate,
        completionDate: item.completionDate,
        creationDate: item.creationDate,
      };
      this.setState({data: [task].concat(this.state.data)});
    });
    ///////////// REMOVED //////////////

    tasksRef.on('child_removed', snapshot => {
      console.log(
        "The blog post titled '" + snapshot.key + "' has been deleted",
      );
      let {data} = this.state;
      data = data.filter(task => {
        return task.id !== snapshot.key;
      });
      this.setState({data});
    });
    ///////////// CHANGED //////////////
    tasksRef.on('child_changed', snapshot => {
      let item = snapshot.val();
      item.id = snapshot.key;
      let i = this.state.data.findIndex(obj => obj.id === item.id);
      let {data} = this.state;
      data[i] = item;
      this.setState({data});
    });
  }
  render() {
    let {data} = this.state;
    return (
      <ContainerRow align="inherit">
        <ColinRow size={8}>
          <Carousel>
            <TasksPieChart data={data} />
            <TasksTimeLineChart data={data} />
          </Carousel>
        </ColinRow>
        <ColinRow size={4}>
          <KPIList data={data} />
        </ColinRow>
      </ContainerRow>
    );
  }
}

export default Dashboard;
