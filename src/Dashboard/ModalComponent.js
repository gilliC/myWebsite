import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {formatDate} from '../services';
import DatePickerItem from '../components/DatePickerItem';

export default class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false,date:''};
        this.onDayChange= this.onDayChange.bind(this);
        this.completeTask= this.completeTask.bind(this);

    }

    componentWillReceiveProps({show}) {
        this.setState({show});
    }
    completeTask(){
        this.props.update(this.props.task.id,false,this.state.date);
    }

    onDayChange(date) {
        date = formatDate(date);
        this.setState({date});
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>
                        <span className="bold">
                            Task:
                        </span>
                        {" " + this.props.task.title}
                    </h4>
                    <h5>
                        <span className="bold">
                            Due Date:
                        </span>
                        {" " + this.props.task.dueDate}
                    </h5>
                    <h5 className="bold">completion date:</h5>
                    <DatePickerItem
                        onDayChange={this.onDayChange}
                        placeholder='Enter completion day'
                    />
                </Modal.Body>
                <Button onClick={this.props.handleClose}>Close</Button>
                <Button onClick={this.completeTask}>Edit</Button>
            </Modal>
        );
    }
}