import React from "react";
import { BoldText, Text, Icon } from "../../../../home_components";
import Container from "./components/Container";
import Row from "./components/Row";
import Title from "./components/Title";
import TextHome from "../../../TextHome";
import TextBold from "../../../TextBold";

export default (props) => {
  return (
    <Container>
      <Row>
        <Icon className="fas fa-desktop" />
        <Title>&</Title>
        <Icon className="fas fa-mobile-alt" />
      </Row>
      <Row>
        <TextHome>Web</TextHome>
        <Container />
        <TextHome>Mobile</TextHome>
      </Row>
      <TextBold>
        Hi, my name is Gilli, I'm a web & mobile developer from Israel.
      </TextBold>
      <Row>
        <Icon className="fab fa-react" title="react" />
        <Icon className="fab fa-python" title="python" />
        <Icon className="fab fa-java" title="java" />
        <Icon className="fab fa-js" title="javascript" />
      </Row>
    </Container>
  );
};
