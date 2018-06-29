import React, {Component} from 'react';
import fire from '../fire';

import ModalComponent from './ModalComponent';

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: this.props.edit,
            show: false,
            isNotCompleted: this.props.task.isNotCompleted,
            isClicked: false,
        };
        this.onClick = this.onClick.bind(this);
        this.onAnimationEnd = this.onAnimationEnd.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.update = this.update.bind(this);

    }
    componentWillReceiveProps({edit}) {
        this.setState({edit})
    }

    handleClose() {
        this.setState({show: false});
    }
    handleShow() {
        if (!this.state.show) {
            this.setState({show: true});
        }
    }
    handleEnd(){
        this.setState({show:false,isClicked:true});
    }

    update(id, value, date = undefined) {
        if (date === undefined) {
            return fire.database().ref('tasks').child(id).update(
                {isNotCompleted: value}
            ).then(() => {
                if (this.state.show)
                    this.handleClose();
                return {};
            }).catch(error => {
                console.log(error.message);
                if (this.state.show)
                    this.handleClose();
            });

        }
        else {
            return fire.database().ref('tasks').child(id).update(
                {
                    isNotCompleted: value,
                    completionDate: date
                }
            ).then(() => {
                this.handleEnd();
                return {};
            }).catch(error => {
                console.log(error.message);
                this.handleClose();
            });

        }
    }

    onClick() {
        if (this.state.edit) {
            //if the user complete the task
            if (this.state.isNotCompleted) {
                this.handleShow();
                // this.setState({isClicked: true});
            }
            //if the task was completed and the user pressed to reverse
            else {
                this.update(this.props.task.id, true);
                this.setState({isNotCompleted: true})
            }
        }


    }

    onAnimationEnd() {
        let {isNotCompleted} = this.state;
        if(isNotCompleted) {
            this.update(this.props.task.id, !isNotCompleted);
        }
            this.setState({isClicked: false, isNotCompleted: !isNotCompleted})

    }
    liClasses(){
        let classOptions = [];
        classOptions[0] = 'task-li task-complete-li '+this.props.disabled;
        classOptions[1] = 'task-li not-completed-task-li '+this.props.disabled;
        classOptions[2] = 'task-li task-completed-li '+this.props.disabled;
        return classOptions;
    }
    render() {
        let date = this.props.task.dueDate;
        let classOptions = this.liClasses();
        let {isNotCompleted, isClicked} = this.state;
        return (
            <li
                onClick={this.onClick}
                onAnimationEnd={this.onAnimationEnd}
                className={isNotCompleted ? isClicked ? classOptions[0] : classOptions[1] : classOptions[2]}
            >
                <h4> {this.props.task.title}</h4>
                {date}
                <ModalComponent
                    show={this.state.show}
                    handleClose={this.handleClose}
                    task={this.props.task}
                    update={this.update}
                />
            </li>
        );
    }
}
