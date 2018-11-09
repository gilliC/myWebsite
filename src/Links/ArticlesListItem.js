import React, {Component} from 'react';
import {connect} from 'react-redux';

import {changeActiveItem, fetchActiveItem} from './actions';

class LinksItem extends Component {
  constructor(props) {
    super(props);
    this.props.fetchActiveItem();
    this.onPress = this.onPress.bind(this);
  }

  onPress(event) {
    event.preventDefault();
    this.props.changeActiveItem(this.props.item);
  }

  render() {
    let isActive = this.props.activeItem.item.title === this.props.item.title;
    let classname = isActive ? 'app link-item-active' : 'app link-item';
    return (
      <div
        className={classname}
        onClick={this.onPress}
        key={this.props.item.title}>
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
export default connect(
  mapStateToProps,
  {changeActiveItem, fetchActiveItem},
)(LinksItem);
