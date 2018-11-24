import React from 'react';
import {Container} from '../components/common_components';

import ProjectCard from './ProjectCard';

export default props => {
  return (
    <Container>
      <ProjectCard
        title="Goals Tracker"
        descripton="A simple react native app to track the amount of steps you take to achieve your goals "
        gitHubLink="https://github.com/gilliC/Achieving-Goals-Assistant"
        projLink="https://play.google.com/store/apps/details?id=com.goalstracking"
      />
    </Container>
  );
};
