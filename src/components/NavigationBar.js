import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {withRouter, Link} from 'react-router-dom';
import logo from '../drawable/websiteLogo.png';


class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {isHovered: false};
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        console.log(this.props.location.pathname);

    }

    onMouseEnter() {
        this.setState({isHovered: true});
    }

    onMouseLeave() {
        this.setState({isHovered: false});
    }

    render() {
        let logoClassName = this.state.isHovered ? "app-logo-hover" : "app-logo";
        const pathname = this.props.location.pathname;

        return (

            <div>
                <Navbar componentClass="app-nav-bar">
                    <Navbar.Header bsClass="app-nav-bar-item">
                        <Navbar.Text bsClass="app-nav-bar-item">
                            <Link to='/'> GC Website</Link>
                        </Navbar.Text>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Nav bsClass={pathname === '/projects' ? 'app-nav-bar-item-active' : 'app-nav-bar-item'}>
                        <NavItem>
                            <Link to="projects">
                                Projects
                            </Link>
                        </NavItem>
                    </Nav>
                    <Nav bsClass={pathname === '/articles' ? 'app-nav-bar-item-active' : 'app-nav-bar-item'}>
                        <NavItem>
                            <Link to="/articles">
                                Articles
                            </Link>
                        </NavItem>
                    </Nav>
                    <Nav bsClass={pathname === '/dashboard' ? 'app-nav-bar-item-active' : 'app-nav-bar-item'}>
                        <NavItem>
                            <Link to="/dashboard">
                                Dashboard
                            </Link>
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <Link to='/'>
                            <img src={logo}
                                 className={logoClassName}
                                 alt="logo"
                                 onMouseEnter={this.onMouseEnter}
                                 onMouseLeave={this.onMouseLeave}/>
                        </Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(NavigationBar);