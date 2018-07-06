import React, {Component} from 'react';

export default class ComponentItem extends Component {
    render() {
        const compi = this.props.component;
        return (
            <div >
                {compi}
            </div>

        );
    }
}
