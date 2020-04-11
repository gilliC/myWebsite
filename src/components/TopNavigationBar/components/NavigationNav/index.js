import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import NavTabItemContainer from "./components/NavTabItemContainer";

export default (props) => {
  const { currentActivePath, page } = props;
  const { path, title } = page;
  const isCurrentRoute = currentActivePath === "/" + path ? "true" : false;

  const onClick = () => {
    scroll.scrollToTop({duration:0});
  };

  return (
    <NavTabItemContainer isCurrentRoute={isCurrentRoute}>
      <Link to={path} onClick={onClick}>{title}</Link>
    </NavTabItemContainer>
  );
};
