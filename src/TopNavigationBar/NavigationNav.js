import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import {NavTabItem} from './topNavigationbar_components';
export default class NavigationNav extends Component {
  render() {
    const pathname = this.props.localPath;
    const active = pathname === '/' + this.props.page.path ? 'true' : undefined;
    return (
      <NavTabItem isactivepage={active}>
        <NavLink exact to={this.props.page.path}>
          {this.props.page.title}
        </NavLink>
        <svg height="5" width="70" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="-70" y2="0" stroke="white" strokeWidth={7} />
        </svg>
      </NavTabItem>
    );
  }
}

NavigationNav.applypropTypes = {
  page: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};
