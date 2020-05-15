import React from "react";
import styled from "styled-components";
import Text from "common/text/Text";

export default (props) => {
  return (
    <IntroductionTextStyled>
      I’m an Israeli full-stack web & mobile enthusiast developer. <br />I
      aspire to write code which is
    </IntroductionTextStyled>
  );
};

const IntroductionTextStyled = styled(Text)`
line-height: 34px;
text-align:justify;
`;