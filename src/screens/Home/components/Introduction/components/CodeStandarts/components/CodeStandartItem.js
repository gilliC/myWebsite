import React from "react";
import CodeStandartContainer from "./CodeStandartContainer";
import CodeStandartText from "./CodeStandartText";

export default (props) => {
  return (
    <CodeStandartContainer>
      <CodeStandartText>{props.text}</CodeStandartText>
    </CodeStandartContainer>
  );
};
