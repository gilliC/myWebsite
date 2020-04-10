import transition from "styled-transition-group";

export default transition.div`
flex:1;
  &:enter {
    opacity: 0.01;
    transform: ${(props) => props.transformInitial || "translateX(0)"}
  }
  &:enter-active {
    opacity: 1;
     transform: translateX(0);
    transition: all 1000ms ease-in;
    transition-duration: ${(props) => props.timeout + "ms" || "1000ms"}
    transform: ${(props) => props.transformFinal || "translateX(0)"}
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }
`;
