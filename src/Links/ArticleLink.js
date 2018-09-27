import React, {Component} from 'react';
import {connect} from 'react-redux';

import {changeActiveItem} from './actions';

class LinksItem extends Component {
  render() {
    return (
      <div className="article-item">
        <a
          className="article-title"
          href={this.props.article.link}
          target="_blank">
          <p className="article-title">
            {' ' + this.props.article.title}
            <span className="article-writer">
              {' / ' + this.props.article.writer}
            </span>
          </p>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeItem: state.activeItem,
  };
  //return the chartData in state (reducer). vocabulary as a prop under the key vocabulary
};
export default connect(
  mapStateToProps,
  {changeActiveItem},
)(LinksItem);
