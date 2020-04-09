import React from "react";
import EcoItemContainerImg from "./EcoItemContainerImg";
import { ColinRow } from "../../../../../components/common_components";
import ColorLayer from "./ColorLayer";

export default (props) => {
  const { img, src, clicked, onClick, children } = props;
  return (
    <ColinRow>
      <EcoItemContainerImg img={img} onClick={onClick} clicked={clicked}>
        <a href={src}>
          <ColorLayer>{children}</ColorLayer>
        </a>
      </EcoItemContainerImg>
    </ColinRow>
  );
};
