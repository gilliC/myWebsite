import React from "react";
import styled from "styled-components";
import { Link } from "../../../../../components/common_components";

export default (props) => {
  const animation = props.isInMobile ? "ColorBackground" : "Grow";
  return (
    <Container>
      <Link {...props} animation={animation} />
    </Container>
  );
};
const Container = styled.div`
  height: 30vh;
  width: 30vh;
`;
