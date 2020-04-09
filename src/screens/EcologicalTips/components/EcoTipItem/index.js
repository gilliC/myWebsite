import React, { Component } from "react";
import PropTypes from "prop-types";
import TipContent from "./components/TipContent";
import { EcoItemTitle } from "./components/EcoItemTitle";
import EcoItemContainer from "./components/EcoItemContainer";

export default class EcoTipItem extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  onClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    const { img, info, src, title } = this.props.item;
    const { clicked } = this.state;
    return (
      <EcoItemContainer img={img} src={src} clicked={clicked} onClick={this.onClick}>
        <EcoItemTitle clicked={clicked}>{title}</EcoItemTitle>
        <TipContent info={info} clicked={clicked} />
      </EcoItemContainer>
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
