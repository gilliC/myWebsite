import React, {Component} from 'react';

export default class KPI extends Component {
    constructor(props) {
        super(props);
        this.state = {isNotCompleted: this.props.task.isNotCompleted, isClicked: false};
        this.onClick = this.onClick.bind(this);
        this.onAnimationEnd = this.onAnimationEnd.bind(this);
    }

    onClick() {
        if (this.state.isNotCompleted)
            this.setState({isClicked: true});
        else this.setState({isNotCompleted: true})
    }

    onAnimationEnd() {
        let {isNotCompleted} = this.state;
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
                {this.props.task.title}
            </li>
        );
    }
}

/**
 *

 **/