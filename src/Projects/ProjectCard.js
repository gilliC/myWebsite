import React from 'react';
import {Title, ContainerRow, Text, Link} from '../components/common_components';
import {
  CardContainerDesktop,
  CardContainerMobile,
  InformationContainer,
  Gif,
} from './projects_components';
import {mobileSize} from '../app_components';
import Carousel from '../components/Carousel';

export default props => {
  let gifs = props.gifs.map(gif => {
    return <Gif src={gif} alt="Goals Tracker gif" key={gif} />;
  });
  if (props.screenSize > mobileSize) {
    return (
      <CardContainerDesktop>
        <ContainerRow>
          <InformationCard {...props} />
          <Carousel>{gifs}</Carousel>
        </ContainerRow>
      </CardContainerDesktop>
    );
  } else
    return (
      <CardContainerMobile>
        <InformationCard {...props} />
        <Carousel>{gifs}</Carousel>
      </CardContainerMobile>
    );
};

const InformationCard = props => {
  return (
    <InformationContainer>
      <Title>{props.title}</Title>
      <Text fontSize="2em" fontFamily="Poiret One">
        {props.descripton}
      </Text>
      <ContainerRow>
        <Link
          animation="ColorBackground"
          className="fab fa-github"
          href={props.gitHubLink}
          width="20%"
        />
        <Link
          animation="ColorBackground"
          className="fab fa-google-play"
          href={props.projLink}
          width="20%"
        />
      </ContainerRow>
    </InformationContainer>
  );
};
