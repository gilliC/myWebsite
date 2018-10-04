import React, {Component} from 'react';
import TaskItem from './TaskItem';
import ModalAddTask from './ModalAddTask';

export default class KPI extends Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data, edit: false, show: false};
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps({data}) {
    this.setState({data});
  }

  onClickEdit() {
    this.setState({edit: !this.state.edit});
  }
  onClickAdd() {
    this.setState({show: true});
  }
  handleClose() {
    this.setState({show: false});
  }

  render() {
    const {data, edit} = this.state;
    return (
      <div
        className={
          edit ? 'list-div list-edit col-md-12' : 'list-div col-md-12'
        }>
        <div className="col-md-12">
          <h3 className="col-md-8 title">Your KPIs:</h3>
          <div
            onClick={this.onClickEdit}
            className={
              edit ? 'edit-text edit-true col-md-2' : 'edit-text col-md-2'
            }>
            <i className="far fa-edit" />
            <p>Edit</p>
          </div>
          <div className="edit-text col-md-2">
            <div onClick={this.onClickAdd}>
              <i className="far fa-plus-square" />
              <p>Add</p>
            </div>
            <ModalAddTask
              show={this.state.show}
              handleClose={this.handleClose}
            />
          </div>
        </div>
        <div className="task col-md-12">
          <ul className="task-ul">
            {data.map(task => {
              return (
                <TaskItem
                  edit={this.state.edit}
                  task={task}
                  key={task.id}
                  disabled={edit ? '' : 'disabled'}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
