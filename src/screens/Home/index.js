import React from "react";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import HomeContainer from "./components/HomeContainer";
import ColoredBottom from "./components/ColoredBottom";
import { mobileSize } from "../../consts/screenSizes";

export default (props) => {
  let isInMobile = false;
  if (props.screenSize <= mobileSize) isInMobile = true;
  return (
    <HomeContainer>
      <AboutMe isInMobile={isInMobile} />
      <Contact isInMobile={isInMobile} />
      <ColoredBottom />
    </HomeContainer>
  );
};
