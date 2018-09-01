import React, {Component} from 'react';
import {NavItem, Nav} from 'react-bootstrap';

import '../GeneralComponentsStyle.css';

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

    return (
      <Nav
        bsClass={
          pathname === this.props.page.path
            ? 'app-nav-bar-item-active'
            : 'app-nav-bar-item'
        }>
        {' '}
        <NavItem href={this.props.page.path}>
          {' '}
          {this.props.page.title}{' '}
        </NavItem>{' '}
      </Nav>
    );
  }
}
