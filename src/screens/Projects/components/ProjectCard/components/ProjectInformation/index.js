import React from "react";
import { InformationContainer } from "../../../../projects_components";
import Title from "../../../../../../components/text/Title";
import TextRegular from "../../../../../../components/text/TextRegular";
import LinksRow from "./components/LinksRow";

export default (props) => {
  const { title, descripton } = props;
  return (
    <InformationContainer>
      <Title>{title}</Title>
      <TextRegular fontSize="2em" fontFamily="Poiret One">
        {descripton}
      </TextRegular>
      <LinksRow {...props} />
    </InformationContainer>
  );
};
