import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';

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
      pathname === this.props.page.path
        ? 'app-nav-bar-item-active'
        : 'app-nav-bar-item';

    return (
      <Nav bsClass={classname}>
        <div>
          <a href={this.props.page.path}>{this.props.page.title}</a>
        </div>
      </Nav>
    );
  }
}
