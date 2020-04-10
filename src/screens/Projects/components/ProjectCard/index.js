import React from "react";
import { mobileSize } from "../../../../consts/screenSizes";
import Carousel from "../../../../components/Carousel";
import ContainerDesktop from "./components/ContainerDesktop";
import ProjectInformation from "./components/ProjectInformation";
import Gif from "./components/ProjectGif";
import CardContainerMobile from "./components/CardContainerMobile";

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
      <Carousel>{gifs}</Carousel>
      <ProjectInformation {...props} />
    </CardContainerMobile>
  );
};
