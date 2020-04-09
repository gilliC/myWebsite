import React from "react";
import styled from "styled-components";
import { linksList } from "../linksList";
import IconItem from "./IconItem";

export default (props) => {
  const linksElements = linksList.map((props) => {
    return <IconItem {...props} />;
  });

  return <Container>{linksElements}</Container>;
};
const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: row;
`;
