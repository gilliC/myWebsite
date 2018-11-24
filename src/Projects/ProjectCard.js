import React from 'react';
import {Title, ContainerRow, Text, Link} from '../components/common_components';
import {CardContainer, InformationContainer, Gif} from './projects_components';

import Carousel from '../components/Carousel';
import mainPhoto from '../drawable/achieving_goals_gifs/app_main.jpg';
import gif1 from '../drawable/achieving_goals_gifs/app_gif_1.gif';
import gif2 from '../drawable/achieving_goals_gifs/app_gif_2.gif';
import gif3 from '../drawable/achieving_goals_gifs/app_gif_3.gif';
import gif4 from '../drawable/achieving_goals_gifs/app_gif_4.gif';

export default props => {
  return (
    <CardContainer>
      <ContainerRow>
        <InformationCard {...props} />
        <Carousel>
          <Gif src={mainPhoto} alt="App main photo" />
          <Gif src={gif1} alt="App gif" />
          <Gif src={gif3} alt="App gif" />
          <Gif src={gif2} alt="App gif" />
          <Gif src={gif4} alt="App gif" />
        </Carousel>
      </ContainerRow>
    </CardContainer>
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
          width="50%"
        />
        <Link
          animation="ColorBackground"
          className="fab fa-google-play"
          href={props.projLink}
          width="50%"
        />
      </ContainerRow>
    </InformationContainer>
  );
};
