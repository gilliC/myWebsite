import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ActiveList from './ActiveArticlesList';
import LinksList from './LinksList';
import {LinksContainer, LinksListContainer} from './links_components';
import {ColinRow} from '../components/common_components';

class Links extends Component {
  render() {
    const {activeList} = this.props;
    return (
      <LinksContainer>
        <LinksListContainer>
          <LinksList activeList={activeList.title} />
        </LinksListContainer>
        <ColinRow float="left" size={2}>
          <ActiveList activeList={activeList} />
        </ColinRow>
      </LinksContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeList: state.activeList.item,
  };
};
export default connect(
  mapStateToProps,
  {},
)(Links);

Links.propTypes = {
  changeActiveItem: PropTypes.func,
  activeItem: PropTypes.shape({
    item: PropTypes.shape({
      title: PropTypes.string,
      articles: PropTypes.array,
    }),
  }),
};
