import styled, { keyframes } from "styled-components";

const fill = keyframes`
 0% {
    width: 1px;
    height: 0%;
    border-bottom: solid 2px white;
    border-radius:30px;
  }
 25% {
    width: 100%;
    height: 1px;
  }
 50% {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
  }
  100% {
    width: 100%;
    height: 100%;
    border-bottom: solid 2px white;
    border-radius:0px;
  }`;

export default styled.div`
  flex: 2;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;

  padding: 10px 0;
  margin: 0 10px; 

  border-bottom: solid 2px white;
  border-width: ${props=> props.isCurrentRoute ? '2px' : 0 };

  transition: all 0.2s;

  :after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: ".";
    color: transparent;
    visibility: none;
    opacity: 0;
    z-index: -1;
  }
  :hover:after {
    opacity: 1;
    visibility: visible;
    height: 100%;
    animation: ${fill} 1.5s forwards;
    -webkit-animation: ${fill} 1.5s forwards;
    -moz-animation: ${fill} 1.5s forwards;
  }
`;
