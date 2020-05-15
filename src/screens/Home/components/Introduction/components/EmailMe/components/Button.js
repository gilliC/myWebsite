import React from "react";
import ButtonContainer from "./ButtonContainer";
import Icon from "./Icon";
import ButtonText from "./ButtonText";

export default () => {
  return (
    <ButtonContainer>
      <ButtonText />
      <Icon className="fas fa-arrow-right email-arrow-icon" />
    </ButtonContainer>
  );
};
