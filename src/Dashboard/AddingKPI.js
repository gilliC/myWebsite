import React, {Component} from 'react'; import fire from '../fire';

import {formatDate} from '../services'; import DatePickerItem from
'../components/DatePicker/DatePickerItem';

export default class AddingKPI extends Component { constructor(props) {
  super(props); this.state = {date: ''}; this.addTask =
    this.addTask.bind(this); this.onDayChange = this.onDayChange.bind(this); }

  addTask(e) { e.preventDefault(); if (this.inputEl.value !== '') { let task =
      { title: this.inputEl.value, isNotCompleted: true, dueDate:
        formatDate(this.state.date), completionDate: '', }; fire .database()
      .ref('tasks') .push(task); this.inputEl.value = ''; } }

  onDayChange(day) { this.setState({date: day}); }

  render() { return ( <form onSubmit={this.addTask}> {' '} <h3>Add KPI</h3>{'
    '} <input type="text" placeholder="  Enter task" ref={el => (this.inputEl =
    el)} className="input-style" />{' '} <DatePickerItem
    onDayChange={this.onDayChange} placeholder="  Enter due date" />{' '} <br
    /> <input type="submit" value="Add" className="btn" />{' '} </form>); } }
