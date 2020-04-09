import React from "react";
import { animateScroll as scroll } from "react-scroll";
import styled, { keyframes } from "styled-components";
import Row from "./AboutMeLeft/components/Row";

export default () => {
  const onClick = () => {
    scroll.scrollToBottom();
  };
  return (
    <Row height='10vh'>
      <ScrollDownIcon onClick={onClick} className="fas fa-chevron-down" />
    </Row>
  );
};

const icon_slide_down = keyframes` 
 0% {
    transform:translateY(0px);
    opacity:1;
  }
  15%{
   transform:translateY(25px);
    font-size:2em;
    opacity:0.3

  }
 25% {
    transform:translateY(50px);
    font-size:2em;
    opacity:0.3
  }
 50%{
    transform:translateY(0px);
    font-size:5em;
    opacity:1;
  }
 100%{
    transform:translateY(0px);
    opacity:1;
  }
`;

export const ScrollDownIcon = styled.i`
  flex: 1;
  margin-bottom:10px;

  color: white;
  font-size: 5em;

  cursor: pointer;

  animation: ${icon_slide_down} 2s ease infinite;
`;
