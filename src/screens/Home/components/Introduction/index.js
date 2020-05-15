import React from "react";
import IntroductionContainer from "./components/IntroductionContainer";
import WelcomeTitle from "./components/WelcomeTitle";
import PlaceHolder from "common/container/PlaceHolder";

export default (props) => {
  return (
    <IntroductionContainer>
        <PlaceHolder flex={0.5}/>
      <WelcomeTitle />
    </IntroductionContainer>
  );
};
