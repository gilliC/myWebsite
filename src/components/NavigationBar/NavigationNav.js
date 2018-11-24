import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import {NavTabItem} from './navigationBar_components';
export default class NavigationNav extends Component {
  render() {
    const pathname = this.props.localPath;
    const active = pathname === '/' + this.props.page.path ? 'true' : undefined;
    return (
      <NavTabItem isactivepage={active}>
        <NavLink exact to={this.props.page.path}>
          {this.props.page.title}
        </NavLink>
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
