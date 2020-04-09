import React from "react";
import Row from "./Row";
import Container from "./Container";
import TextHome from "../../../../TextHome";

export default (props) => {
  return (
    <Row>
      <TextHome>Web</TextHome>
      <Container />
      <TextHome>Mobile</TextHome>
    </Row>
  );
};
