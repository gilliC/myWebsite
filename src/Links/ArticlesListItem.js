import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {changeActiveItem} from './actions';
import {ArticleItemContainer} from './links_components';
import {Title} from '../components/common_components';

class LinksItem extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(event) {
    event.preventDefault();
    this.props.changeActiveItem(this.props.item);
  }

  render() {
    const {title} = this.props.item;
    let isActive = this.props.activeList === title;
    return (
      <ArticleItemContainer
        active={isActive}
        onClick={this.onPress}
        key={title}>
        <Title fontFamily="Abel" fontSize="1em">
          {title}
        </Title>
      </ArticleItemContainer>
    );
  }
}

export default connect(
  null,
  {changeActiveItem},
)(LinksItem);

LinksItem.propTypes = {
  changeActiveItem: PropTypes.func,
  activeList: PropTypes.string,
  item: PropTypes.shape({
    title: PropTypes.string,
    articles: PropTypes.array,
  }),
};
