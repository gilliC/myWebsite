import React from "react";
import { RowContainer } from "../../home_components";
import AboutMeMobile from "./components/AboutMeMobile";
import AboutMeContainer from "./components/AboutMeContainer";
import AboutMeLeft from "./components/AboutMeLeft";
import AboutMeRight from "./components/AboutMeRight";
import ScrollDownIcon from "./components/ScrollDownIcon";

export default (props) => {
  if (props.isInMobile) {
    return <AboutMeMobile />;
  } else {
    return (
      <AboutMeContainer>
        <RowContainer>
          <AboutMeLeft />
          <AboutMeRight />
        </RowContainer>
        <ScrollDownIcon />
      </AboutMeContainer>
    );
  }
};
