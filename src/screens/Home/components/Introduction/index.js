import React from "react";
import IntroductionContainer from "./components/IntroductionContainer";
import WelcomeTitle from "./components/WelcomeTitle";
import PlaceHolder from "common/container/PlaceHolder";
import IntroductionText from "./components/IntroductionText";
import CodeStandarts from "./components/CodeStandarts";
import VerticalHeight from "common/container/VerticalHeight";
import EmailMe from "./components/EmailMe";

export default (props) => {
  return (
    <IntroductionContainer>
      <PlaceHolder />
      <WelcomeTitle />
      <VerticalHeight height="7vh" />
      <IntroductionText />
      <VerticalHeight height="7vh" />
      <CodeStandarts />
      <PlaceHolder flex={1} />
      <EmailMe />
      <PlaceHolder flex={2} />
    </IntroductionContainer>
  );
};
