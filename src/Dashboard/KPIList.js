import React, {Component} from 'react';
import TaskItem from './TaskItem';

export default class KPI extends Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data, edit: false};
        this.onClick = this.onClick.bind(this);
    }

    componentWillReceiveProps({data}) {
        this.setState({data})
    }

    onClick() {
        this.setState({edit: !this.state.edit});
    }

    render() {
        const {data, edit} = this.state;
        return (
            <div className={edit ? "edit-list-div col-md-12" : "list-div col-md-12"}>
                <div className="col-md-12">
                    <h3 className="col-md-8">Your KPIs:</h3>
                    <div onClick={this.onClick}
                         className={edit ? "edit-true-p col-md-4" : "edit-false-p col-md-4"}>
                        <i className="far fa-edit" size="3px"></i>
                        <p>Edit</p>
                    </div>
                </div>
                <div className="col-md-12">
                    <ul className="task-ul">
                        {data.map(task => {
                            return (
                                <TaskItem
                                    edit={this.state.edit}
                                    task={task}
                                    key={task.id}
                                    disabled={edit?"":"disabled"}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}