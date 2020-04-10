import React from "react";
import Title from "../../../../../../components/text/Title";
import TextRegular from "../../../../../../components/text/TextRegular";
import LinksRow from "./components/LinksRow";

export default (props) => {
  const { title, descripton } = props;
  return (
    <div>
      <Title>{title}</Title>
      <TextRegular fontSize="2em" fontFamily="Poiret One">
        {descripton}
      </TextRegular>
      <LinksRow {...props} />
    </div>
  );
};
