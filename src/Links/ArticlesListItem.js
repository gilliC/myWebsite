import React, {Component} from 'react';
import {connect} from 'react-redux';

import {changeActiveItem} from './actions';

class LinksItem extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(event) {
        event.preventDefault();
        this.props.changeActiveItem(this.props.item);
    }

    render() {
        return (
            <div className="app link-item" onClick={this.onPress} key={this.props.item.title}>
                <h3>{this.props.item.title}</h3>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        activeItem: state.activeItem,

    };
    //return the chartData in state (reducer). vocabulary as a prop under the key vocabulary

};
export default connect(mapStateToProps, {changeActiveItem})(LinksItem);
