import React from "react";
import {
  Title,
  Link,
} from "../../../../components/common_components";
import { linksList } from "./linksList";
import ContactContainer from "./components/ContactContainer";

export default (props) => {
  const animation = props.isInMobile ? "ColorBackground" : "Grow";
  const linksElements = linksList.map((props) => {
    return <Link {...props} animation={animation} />;
  });

  return (
    <ContactContainer>
      <br />
      <Title>Contact</Title>
      <div>{linksElements}</div>
    </ContactContainer>
  );
};
