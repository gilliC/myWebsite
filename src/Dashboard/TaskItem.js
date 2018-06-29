import React, {Component} from 'react';
import fire from '../fire';

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isNotCompleted: this.props.task.isNotCompleted, isClicked: false};
        this.onClick = this.onClick.bind(this);
        this.onAnimationEnd = this.onAnimationEnd.bind(this);
    }
    update(id,value) {
        return fire.database().ref('tasks').child(id).update({isNotCompleted:value}).then(() => {
            return {};
        }).catch(error => {
            console.log(error.message);
        });
    }

    onClick() {
        if (this.state.isNotCompleted) {
            this.setState({isClicked: true});
        }
        else {
            this.update(this.props.task.id,true);
            this.setState({isNotCompleted: true})
        }

    }

    onAnimationEnd() {
        let {isNotCompleted} = this.state;
        this.update(this.props.task.id,!isNotCompleted);
        this.setState({isClicked: false, isNotCompleted: !isNotCompleted})
    }

    render() {
        let {isNotCompleted, isClicked} = this.state;
        return (
            <li
                onClick={this.onClick}
                onAnimationEnd={this.onAnimationEnd}
                className={isNotCompleted ? isClicked ? 'task-li task-complete-li' : 'task-li not-completed-task-li' : 'task-li task-completed-li'}
            >
                <h4> {this.props.task.title}</h4>
                {this.props.task.date}

            </li>
        );
    }
}

/**
 *

 **/