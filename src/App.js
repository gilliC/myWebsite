import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import {AppContainer, HeaderContainer, mobileSize} from './app_components';
import {ContainerRow} from './components/common_components';
import {AppSideContainr, SidebarPush} from './app_components';
import NavigationBar from './components/TopNavigationBar/TopNavigationBar';
import Sidebar from './components/Sidebar/Sidebar';

import Routing from './services/routing';
const store = createStore(reducers);
class App extends Component {
  constructor(props) {
    super(props);
    const pages = [
      {
        path: 'projects',
        title: 'Projects',
      },
      {
        path: 'ecologicaltips',
        title: 'Ecologial Tips',
      },
    ];
    this.state = {width: 0, height: 0, pages: pages};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }
  render() {
    const {pages, width} = this.state;
    if (width > mobileSize) {
      return (
        <Provider store={store}>
          <Router>
            <AppContainer>
              <HeaderContainer>
                <NavigationBar pages={pages} />
              </HeaderContainer>
              <Routing screenSize={width} />
            </AppContainer>
          </Router>
        </Provider>
      );
    } else
      return (
        <Provider store={store}>
          <Router>
            <ContainerRow align="initial">
              <SidebarPush left size={2}>
                <Sidebar pages={pages} />
              </SidebarPush>
              <AppSideContainr right size={9}>
                <Routing screenSize={width} />
              </AppSideContainr>
            </ContainerRow>
          </Router>
        </Provider>
      );
  }
}

export default App;
