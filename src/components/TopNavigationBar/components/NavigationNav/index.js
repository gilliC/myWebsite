import React from "react";
import NavTabItemContainer from "./components/NavTabItemContainer";
import { Link } from "react-router-dom";

export default (props) => {
  const { localPath: pathname, page } = props;
  const { path, title } = page;
  const isCurrentRoute = pathname === "/" + path ? "true" : false;
  return (
    <NavTabItemContainer isCurrentRoute={isCurrentRoute}>
      <Link to={path}>{title}</Link>
    </NavTabItemContainer>
  );
};
