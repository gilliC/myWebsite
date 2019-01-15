import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import {withRouter} from 'react-router-dom';

import logo from '../drawable/websiteLogo.png';
import NavigationNav from './NavigationNav';
import {NavTabBrand, LogoTabTop} from './topNavigationbar_components';

class NavigationBar extends Component {
  render() {
    const pathname = this.props.location.pathname;
    const {pages} = this.props;
    return (
      <Navbar componentClass="app-nav-bar">
        <NavTabBrand />
        {pages.map(page => {
          return (
            <NavigationNav page={page} key={page.path} localPath={pathname} />
          );
        })}
        <LogoTabTop src={logo} />
      </Navbar>
    );
  }
}

export default withRouter(NavigationBar);
