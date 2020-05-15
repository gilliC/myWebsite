import React from "react";
import ButtonContainer from "./ButtonContainer";
import Title from "common/text/Title";

export default (props) => {
  return (
    <ButtonContainer>
      <Title style={{ fontStyle: "italic", fontSize: "18px", margin:0 }}>Email Me</Title>
      <i class="fas fa-arrow-right" style={{marginLeft: 20, fontSize: "18px"}}></i>
    </ButtonContainer>
  );
};
