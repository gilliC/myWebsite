import React, {Component} from 'react';

import TaskItem from './TaskItem';

export default class KPI extends Component {
    constructor(props) {
        super(props);
        this.state = {data:this.props.data};
    }
    componentWillReceiveProps({data}) {
        this.setState({data})
    }
    render() {
        const {data} = this.state;
        return (
            <div>
                <h3>Your KPIs:</h3>
                <ul className="task-ul">
                    {data.map(task => {
                        return (
                            <TaskItem task={task} key={task.id}/>
                        );
                    })}
                </ul>
            </div>
        );
    }
}