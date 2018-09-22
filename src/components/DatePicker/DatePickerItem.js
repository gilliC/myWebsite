import React, {Component} from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';
import './Datepicker.scss';
import {formatDate, parseDate} from '../../services';
import 'moment/locale/it';

export default class extends Component {
  render() {
    return (
      <DayPickerInput
        dayPickerProps={{
          showOutsideDays: true,
          todayButton: 'Today',
          className: 'DPContainer',
        }}
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={this.props.placeholder || '  Enter date'}
        onDayChange={this.props.onDayChange}
      />
    );
  }
}
