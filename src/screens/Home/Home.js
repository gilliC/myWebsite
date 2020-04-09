import React from "react";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import { mobileSize } from "../../app_components";
import { HomeContainer } from "./home_components";
import ColoredBottom from "./components/Contact/components/ColoredBottom";

export default (props) => {
  let isInMobile = false;
  if (props.screenSize <= mobileSize) isInMobile = true;
  return (
    <HomeContainer isInMobile={isInMobile}>
      <AboutMe isInMobile={isInMobile} />
      <Contact isInMobile={isInMobile} />
      <ColoredBottom />
    </HomeContainer>
  );
};
