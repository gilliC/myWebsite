import React from "react";
import IntroductionContainer from "./components/IntroductionContainer";
import WelcomeTitle from "./components/WelcomeTitle";
import PlaceHolder from "common/container/PlaceHolder";
import IntroductionText from "./components/IntroductionText";
import CodeStandarts from "./components/CodeStandarts";
import VerticalHeight from "common/container/VerticalHeight";

export default (props) => {
  return (
    <IntroductionContainer>
      <PlaceHolder />
      <WelcomeTitle />
      <VerticalHeight />
      <IntroductionText />
      <VerticalHeight />
      <CodeStandarts />
      <PlaceHolder flex={3} />
    </IntroductionContainer>
  );
};
