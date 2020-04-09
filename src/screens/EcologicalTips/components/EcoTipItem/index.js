import React, { useState } from "react";
import PropTypes from "prop-types";
import TipContent from "./components/TipContent";
import EcoItemTitle from "./components/EcoItemTitle";
import EcoItemContainer from "./components/EcoItemContainer";

const EcoTipItem = (props) => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };
  const { img, info, src, title } = props.item;
  return (
    <EcoItemContainer img={img} src={src} clicked={clicked} onClick={onClick}>
      <EcoItemTitle clicked={clicked}>{title}</EcoItemTitle>
      <TipContent info={info} clicked={clicked} />
    </EcoItemContainer>
  );
};

EcoTipItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    info: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
  }),
};
export default EcoTipItem;
