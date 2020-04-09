import React, { Component } from "react";
import EcoItemContainerImg from "./EcoItemContainerImg";
import { ColinRow } from "../../../../../components/common_components";
import { ColorLayer } from "./ColorLayer";

export default class EcoItemContainer extends Component {
  render() {
    const { img, src, clicked, onClick, children } = this.props;
    return (
      <ColinRow>
        <EcoItemContainerImg img={img} onClick={onClick} clicked={clicked}>
          <a href={src}>
            <ColorLayer>{children}</ColorLayer>
          </a>
        </EcoItemContainerImg>
      </ColinRow>
    );
  }
}
