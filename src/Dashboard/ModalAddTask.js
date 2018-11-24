import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import fire from '../fire';

import {formatDate} from '../services';
import DatePickerItem from '../components/DatePickerItem';
import {MainInput} from '../components/common_components';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false, date: ''};
    this.addTask = this.addTask.bind(this);
    this.onDayChange = this.onDayChange.bind(this);
  }

  componentWillReceiveProps({show}) {
    this.setState({show});
  }

  addTask(e) {
    e.preventDefault();
    if (this.inputEl.value !== '') {
      let task = {
        title: this.inputEl.value,
        isNotCompleted: true,
        dueDate: formatDate(this.state.date),
        completionDate: '',
      };
      fire
        .database()
        .ref('tasks')
        .push(task)
        .then(this.props.handleClose)
        .catch(error => {
          console.log(error.message);
        });
      this.inputEl.value = '';
    }
  }

  onDayChange(day) {
    this.setState({date: day});
  }

  render() {
    return (
      <Modal
        className="modal"
        show={this.state.show}
        onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="special-title">Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <MainInput
            type="text"
            placeholder="  Enter task"
            ref={el => (this.inputEl = el)}
          />
          <DatePickerItem
            onDayChange={this.onDayChange}
            placeholder="  Enter due date"
          />
        </Modal.Body>
        <Button onClick={this.props.handleClose}>Close</Button>
        <Button className="btn-add" onClick={this.addTask}>
          Add
        </Button>
      </Modal>
    );
  }
}
