import React, {Component} from 'react';
import fire from '../fire';

export default class AddingKPI extends Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
    }
    addTask(e) {
        e.preventDefault();
        fire.database().ref('tasks').push({title:this.inputEl.value, isNotCompleted:true});
        this.inputEl.value = '';
    }
    render() {
        return (

                <form onSubmit={this.addTask}>
                    <h3>Add KPI</h3>
                    <br/>
                    <input type="text"
                           ref={ el => this.inputEl = el }
                           className="input-style"/>
                    <input type="submit" value="Add" className="btn"/>
                </form>
        );
    }
}