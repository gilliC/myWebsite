import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import './DatePickerStyle.css';

import {formatDate, parseDate} from 'react-day-picker/moment';
import 'moment/locale/it';


export default function DatePickerItem() {
    return (
        <DayPickerInput

            dayPickerProps={
                {
                    showOutsideDays: true,
                    todayButton: 'Today',
                    className: 'DPContainer',
                }}
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={`${formatDate(new Date())}`}
        />
    )
        ;

}