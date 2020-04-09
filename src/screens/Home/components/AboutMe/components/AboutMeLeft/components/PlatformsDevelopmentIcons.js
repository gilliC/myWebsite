import React from "react";
import Row from "./Row";
import Title from "./Title";
import IconHome from "../../../../IconHome";

export default (props) => {
  return (
    <Row>
      <IconHome className="fas fa-desktop" />
      <Title>&</Title>
      <IconHome className="fas fa-mobile-alt" />
    </Row>
  );
};
