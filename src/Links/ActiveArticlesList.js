import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchActiveItem} from './actions';
import ArticleLink from './ArticleLink';

class ActiveArticlesList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchActiveItem();
  }

  render() {
    return (
      <div className="list-container">
        <div className="col-md-12">
          <h1>{this.props.activeItem.title}</h1>
        </div>
        <div className="col-md-12">
          {this.props.activeItem.articles.map(article => {
            return <ArticleLink article={article} key={article.title} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeItem: state.activeItem.item,
  };
};
export default connect(
  mapStateToProps,
  {fetchActiveItem},
)(ActiveArticlesList);
