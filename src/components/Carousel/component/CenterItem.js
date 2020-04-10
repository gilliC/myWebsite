import React from "react";
import styled from "styled-components";
import FadeInContainer from "./FadeInContainer";

export default (props) => {
  const { show, showChild, componentIndex, changeState } = props;
  return (
    <Container>
      <FadeInContainer
        in={show}
        timeout={1000}
        transformInitial="translateX(5px)"
        onExit={changeState}
      >
        {showChild(componentIndex)}
      </FadeInContainer>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;
