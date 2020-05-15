import React from "react";
import Title from "common/text/Title";
import Container from "common/container/Container";
import ThinTitle from "./ThinTitle";
import Line from "./Line";
import Row from "common/container/Row";
import PlaceHolder from "common/container/PlaceHolder";

export default (props) => {
  return (
    <Container>
      <ThinTitle>Hello, I’m</ThinTitle>
      <Row>
        <Line />
        <Title fontSize="48px">GILLI CARMON</Title>
        <Line />
      </Row>
      <Row>
        <PlaceHolder flex={2} />
        <ThinTitle>Full - Stack Developer</ThinTitle>
      </Row>
    </Container>
  );
};
