import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {withRouter, NavLink} from 'react-router-dom';

import logo from '../../drawable/websiteLogo.png';
import NavigationNav from './NavigationNav';
import './NavigationBar.scss';

class NavigationBar extends Component {
  static defaultProps = {
    pages: [
      {path: 'dashboard', title: 'Dashboard'},
      {
        path: 'articles',
        title: 'Articles',
      },

      {
        path: 'ecologicaltips',
        title: 'Eco Tips',
      },
    ],
  };

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
    let logoClassName = this.state.isHovered ? 'app-logo-hover' : 'app-logo';
    const pathname = this.props.location.pathname;

    return (
      <div>
        <Navbar fluid={true} componentClass="app-nav-bar">
          <Navbar.Header>
            <Nav bsClass="app-brand" pullLeft>
              <NavLink className="app-brand-text" exact to="/">
                GC <br /> Website
              </NavLink>
            </Nav>
          </Navbar.Header>
          {this.props.pages.map(page => {
            return (
              <NavigationNav page={page} key={page.path} localPath={pathname} />
            );
          })}
          <Nav bsClass="logo-div" pullRight>
            <NavItem>
              <img
                src={logo}
                className={logoClassName}
                alt="logo"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              />
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
