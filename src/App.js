import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {CSSTransitionGroup, TransitionGroup} from 'react-transition-group';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import './App.css';

import NavigationBar from './components/NavigationBar';

import Home from './Home/Home';
import Links from './Links/Links';
import Dashboard from './Dashboard/Dashboard';



const store = createStore(reducers);

const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

const App = () => (
    <Provider store={store}>
        <Router>
            <div className="app">
                <header className="app-header">
                    <NavigationBar/>
                </header>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <Route exact path="/"
                           children={({match, ...rest}) => (
                               <TransitionGroup component={firstChild}>
                                   {match && <Home {...rest} />}
                               </TransitionGroup>)}/>
                    <Route exact path="/articles"
                           children={({match, ...rest}) => (
                               <TransitionGroup component={firstChild}>
                                   {match && <Links {...rest} />}
                               </TransitionGroup>
                           )}/>
                    <Route exact path="/dashboard"
                           children={({match, ...rest}) => (
                               <TransitionGroup component={firstChild}>
                                   {match && <Dashboard {...rest} />}
                               </TransitionGroup>
                           )}/>
                </CSSTransitionGroup>
            </div>
        </Router>
    </Provider>
);

export default App;
