import React from "react";
import { Title } from "../../../../components/common_components";
import ContactContainer from "./components/ContactContainer";
import LinksList from "./components/LinksList";

export default (props) => {

  return (
    <ContactContainer>
      <Title>Contact</Title>
      <br />
      <LinksList />
    </ContactContainer>
  );
};
