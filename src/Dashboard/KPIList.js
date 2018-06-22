import React, {Component} from 'react';
import fire from '../fire';

import TaskItem from './TaskItem';

export default class KPI extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }
    componentWillMount() {
        let tasksRef = fire.database().ref('tasks').orderByKey().limitToLast(100);
        tasksRef.on('child_added', snapshot => {
            let task = {title: snapshot.val().title, isNotCompleted: snapshot.val().isNotCompleted, id: snapshot.key};
            this.setState({data: [task].concat(this.state.data)});
        })}

    render() {
        const {data} = this.state;
        return (
            <div>
                <h3>Your KPIs:</h3>
                <ul className="task-ul">
                    {data.map(task => {
                        return (
                            <TaskItem task={task} key={task.title}/>
                        );
                    })}
                </ul>
            </div>
        );
    }
}