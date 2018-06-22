import React, {Component} from 'react';

export default class KPI extends Component {
    constructor(props) {
        super(props);
        this.state = {kpi: ''};
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({kpi: e.target.value});
    }

    render() {
        return (
            <div>
                <h3>Add KPI</h3>
                <br/>
                <input type="text" name="kpi" value={this.state.kpi} onChange={this.onChange} className="input-style"/>
                <input type="submit" value="Add" className="btn"/>
                <p>{this.state.kpi}</p>
            </div>
        );
    }
}