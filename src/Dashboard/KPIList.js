import React, {Component} from 'react';
import TaskItem from './TaskItem';

export default class KPI extends Component {
    constructor(props) {
        super(props);
        let data = [
            {
                title: 'Clean my room',
                isNotCompleted: true
            },
            {
                title: 'Study German',
                isNotCompleted: false
            },
            {
                title: 'Read in Spanish',
                isNotCompleted: true
            }
        ];
        this.state = {data: data};
    }


    render() {
        const {data} = this.state;
        return (
            <div>
                <h3>Your KPIs:</h3>
                <ul className="task-ul">
                    {data.map(task => {
                        return (
                            <TaskItem task ={task} key={task.title}/>
                        );
                    })}
                </ul>
            </div>
        );
    }
}