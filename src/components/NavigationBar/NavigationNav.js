import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

import './NavigationBar.scss';
export default class NavigationNav extends Component {
  constructor(props) {
    super(props);
    this.state = {isHovered: false};
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({isHovered: true});
  }

  onMouseLeave() {
    this.setState({isHovered: false});
  }

  render() {
    const pathname = this.props.localPath;
    const classname =
      pathname === '/' + this.props.page.path
        ? 'app-nav-bar-item item-active'
        : 'app-nav-bar-item';
    return (
      <Nav bsClass={classname}>
        <NavLink exact to={this.props.page.path}>
          {this.props.page.title}
        </NavLink>
      </Nav>
    );
  }
}
