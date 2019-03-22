import React from 'react';
import mainPhoto from '../../drawable/achieving_goals_gifs/app_main.jpg';
import gif1 from '../../drawable/achieving_goals_gifs/app_gif_1.gif';
import gif2 from '../../drawable/achieving_goals_gifs/app_gif_2.gif';
import gif3 from '../../drawable/achieving_goals_gifs/app_gif_3.gif';
import gif4 from '../../drawable/achieving_goals_gifs/app_gif_4.gif';

import {Container} from '../../components/common_components';
import ProjectCard from './ProjectCard';

export default props => {
  return (
    <Container>
      <ProjectCard
        title="Goals Tracker"
        descripton="A simple react native app to track the amount of steps you take to achieve your goals "
        gitHubLink="https://github.com/gilliC/Achieving-Goals-Assistant"
        projLink="https://play.google.com/store/apps/details?id=com.goalstracking"
        projLinkClassName="fab fa-google-play"
        screenSize={props.screenSize}
        gifs={[mainPhoto, gif1, gif2, gif3, gif4]}
      />
    </Container>
  );
};
