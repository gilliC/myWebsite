import React from "react";
import styled from "styled-components";
import TextHome from "../../TextHome";

export default () => {
  return (
    <RightSideDiv>
      <TextHome>
        I'm a junior & enthusiastic programmer, looking for some new projects to
        work on. I enjoy what I do, which promises great results. I have taught
        myself React, React Native and Python. I'm serious and open minded to
        learn new things. I have also learned c# & Java, but most of my work
        focuses on websites and mobile application.
      </TextHome>
    </RightSideDiv>
  );
};

const RightSideDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;

  border-style: double;
  border-width: 7px;
  border-color: rgba(255, 255, 255, 0.3);
`;
