import React, {Component} from 'react';
import {connect} from 'react-redux';

import ArticleItem from './ArticlesListItem';
import {fetchList, fetchActiveItem} from './actions';

class LinksList extends Component {
  constructor(props) {
    super(props);
    props.fetchList();
  }

  render() {
    return (
      <div>
        {this.props.list.map(link => {
          return <ArticleItem item={link} key={link.title} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
  };
};
export default connect(
  mapStateToProps,
  {fetchList, fetchActiveItem},
)(LinksList);
