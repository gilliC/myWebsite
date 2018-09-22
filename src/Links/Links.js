import React, {Component} from 'react';
import LinksList from './LinksList';
import ActiveList from './ActiveArticlesList';
import AnimatedWrapper from '../components/AnimatedWrapper';

import './Links.scss';

class Links extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 link-list">
            <LinksList />
          </div>
          <div className="col-md-6 active-list">
            <ActiveList link={{title: 'React'}} />
          </div>
        </div>
      </div>
    );
  }
}

export default Links;
