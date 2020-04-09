import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Layer,
  EcoItemText,
  EcoItem,
  EcoItemTitle,
} from "../ecotips_components";
import { ColinRow, SmallText } from "../../../components/common_components";
import TipDescription from "./components/TipDescription";
import TipContent from "./components/TipContent";

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
      <ColinRow>
        <EcoItem img={img} onClick={this.onClick} clicked={clicked}>
          <a href={src}>
            <Layer>
              <EcoItemTitle clicked={clicked}>{title}</EcoItemTitle>
              <TipContent info={info} clicked={clicked}/>
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
