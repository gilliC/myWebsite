import React, {Component} from 'react';

export default class ComponentItem extends Component {
    render() {
        return (
            <div>
                {this.props.component}
            </div>

        );
    }
}
