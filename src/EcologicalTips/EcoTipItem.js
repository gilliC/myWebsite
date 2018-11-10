import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Layer, EcoItemText, EcoItem, EcoItemTitle} from './ecotips_components';
import {ColinRow, Bold, SmallText} from '../components/general_components';

export default class EcoTipItem extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({clicked: !this.state.clicked});
  }
  render() {
    const {img, info, src, title} = this.props.item;
    const {clicked} = this.state;
    let description = '';

    if (info !== undefined) {
      description = info.split('\n').map(function(item, key) {
        if (item.split('\b').length > 1)
          return (
            <Bold key={key}>
              {item}
              <br />
            </Bold>
          );
        else return <EcoItemText key={key}>{item}</EcoItemText>;
      });
    }

    let content = (
      <EcoItemText>
        Click for more information <br />
        <SmallText>The photo was designed by Freepik</SmallText>
      </EcoItemText>
    );

    if (clicked) content = <EcoItemText>{description}</EcoItemText>;

    return (
      <ColinRow>
        <EcoItem img={img} onClick={this.onClick} clicked={clicked}>
          <a href={src}>
            <Layer>
              <EcoItemTitle clicked={clicked}>{title}</EcoItemTitle>
              {content}
            </Layer>
          </a>
        </EcoItem>
      </ColinRow>
    );
  }
}

EcoTipItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    info: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
  }),
};
