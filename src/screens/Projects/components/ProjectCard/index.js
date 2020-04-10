import React from "react";
import { CardContainerMobile, Gif } from "../../projects_components";
import { mobileSize } from "../../../../app_components";
import Carousel from "../../../../components/Carousel";
import ContainerDesktop from "./components/ContainerDesktop";
import ProjectInformation from "./components/ProjectInformation";

export default (props) => {
  let gifs = props.gifs.map((gif) => {
    return <Gif src={gif} alt="Goals Tracker gif" key={gif} />;
  });
  if (props.screenSize > mobileSize) {
    return (
      <ContainerDesktop>
        <ProjectInformation {...props} />
        <Carousel>{gifs}</Carousel>
      </ContainerDesktop>
    );
  }
  return (
    <CardContainerMobile>
      <ProjectInformation {...props} />
      <Carousel>{gifs}</Carousel>
    </CardContainerMobile>
  );
};
